import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import SwipeableView from "./SwipeableView";
import CustomTitle from "./CustomTitle";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";
import { useSelectedTask } from "../context/SelectedTaskContext";
import { taskList } from "../styles/components/task-list";

const SECTIONS = ["to do", "in progress", "done"];

const groupTasksByStatus = (tasks) => {
  return tasks.reduce((grouped, task) => {
    if (SECTIONS.includes(task.status)) {
      grouped[task.status] = [...(grouped[task.status] || []), task];
    } else {
      console.warn(`Unknown status for task: ${task.status}`);
    }
    return grouped;
  }, {});
};

// Flatten the tasks array to include section headers
const flattenTasks = (tasks) => {
  return SECTIONS.flatMap((section) => [
    {
      item: { id: `header-${section}`, name: section, isHeader: true },
      isHeader: true,
    },
    ...(tasks[section] || []).map((task) => ({ item: task, isHeader: false })),
  ]);
};

const updateTaskStatusInDB = async (item) => {
  if (!item) {
    alert("No item dragged");
    return;
  }

  const payload = {
    taskId: item.id,
    status: item.status,
  };

  try {
    await axiosInstance.put("/tasks/editTaskStatus", payload);
  } catch (error) {
    let errorMessage;
    if (error.response) {
      errorMessage =
        error.response.data.message ||
        "Something went wrong while processing your request.";
      alert(errorMessage);
    } else if (error.request) {
      console.error("Request error:", error.request);
      alert("Error: No response from the server.");
    } else {
      console.error("Error message:", error.message);
      alert("Error: An unexpected error occurred.");
    }
  }
};

const TaskList = ({ date, setModalVisible, handleEditTask, setRefresh }) => {
  // Initialize the flat API with the section headers
  const [flatApi, setFlatApi] = useState(
    SECTIONS.map((section) => ({
      isHeader: true,
      item: { id: `header-${section}`, isHeader: true, name: section },
    }))
  );

  const { user } = useUser();
  const { updateSelectedTask } = useSelectedTask();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosInstance.get("/tasks/userTasks", {
          params: { date, user: user.id },
        });
        setFlatApi(flattenTasks(groupTasksByStatus(data)));
      } catch (error) {
        console.error(
          "Error fetching tasks:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchTasks();
  }, []);

  const handleDragEnd = useCallback(({ data, to }) => {
    // Prevent move task above to do header
    if (to === 0) {
      return;
    }

    let currentSection = null;

    // Update the status of the dragged task
    setFlatApi(
      data.map((item, index) => {
        if (item.isHeader) {
          currentSection = item;
        } else if (currentSection) {
          item.item.status = currentSection.item.name;
        }
        return item;
      })
    );

    // Update the task status in the database sending the drag task as parameter
    updateTaskStatusInDB(data[to].item);
  }, []);

  const renderItem = ({ item, drag }) => (
    <TouchableOpacity
      style={item.isHeader ? taskList.headerContainer : {}}
      // Prevent to drag headers
      onLongPress={item.isHeader ? undefined : drag}
      onPress={
        item.isHeader
          ? undefined
          : () => {
              updateSelectedTask(item.item);
              setModalVisible(true);
            }
      }
    >
      {item.isHeader ? (
        <CustomTitle text={item.item.name} type="small" />
      ) : (
        <SwipeableView
          item={item.item}
          onPressEdit={() => {
            handleEditTask();
            updateSelectedTask(item.item);
          }}
          setRefresh={setRefresh}
          isTask={true}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={taskList.container}>
        <DraggableFlatList
          style={taskList.flatList}
          data={flatApi}
          renderItem={renderItem}
          keyExtractor={(item) =>
            `${item.isHeader ? "header" : "task"}-${item.item.id}`
          }
          onDragEnd={handleDragEnd}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TaskList;
