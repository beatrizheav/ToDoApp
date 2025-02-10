import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import CustomTitle from "./CustomTitle";
import axiosInstance from "../api/axiosInstance";
import { taskList } from "../styles/components/task-list";
import { useUser } from "../context/UserContext";

const groupTasksByStatus = (tasks) => {
  const grouped = {
    "to do": [],
    "in progress": [],
    done: [],
  };
  tasks.forEach((task) => {
    if (grouped[task.status]) {
      grouped[task.status].push(task);
    } else {
      console.warn(`Unknown status for task: ${task.status}`);
    }
  });
  return grouped;
};

const flattenTasks = (tasks) => {
  const sections = ["to do", "in progress", "done"];
  const flattened = [];

  sections.forEach((section) => {
    const sectionHeader = {
      item: { id: `header-${section}`, name: section, isHeader: true },
      isHeader: true,
    };
    flattened.push(sectionHeader);
    if (tasks && tasks[section] && tasks[section].length > 0) {
      const taskItems = tasks[section].map((task) => ({
        item: task,
        isHeader: false,
      }));
      flattened.push(...taskItems);
    }
  });
  return flattened;
};

const TaskList = ({ date, setTask, setModalVisible, onPressEdit }) => {
  const [apiResponse, setApiResponse] = useState(null);
  const [flatApi, setFlatApi] = useState([
    {
      isHeader: true,
      item: { id: "header-to do", isHeader: true, name: "to do" },
    },
    {
      isHeader: true,
      item: { id: "header-in progress", isHeader: true, name: "in progress" },
    },
    {
      isHeader: true,
      item: { id: "header-done", isHeader: true, name: "done" },
    },
  ]);
  const { user } = useUser();

  const apiData = {
    date: date,
    user: user.id,
  };

  const handleTasks = async () => {
    try {
      const response = await axiosInstance.get("/tasks/userTasks", {
        params: apiData,
      });
      setApiResponse(response.data);
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.message ||
          "Something went wrong while processing your request.";
        if (error.response.status === 404) {
          setApiResponse("NO TASKS");
        }
        console.log(errorMessage);
      } else if (error.request) {
        console.error("Request error:", error.request);
        console.log("Error: No response from the server.");
      } else {
        console.error("Error message:", error.message);
        console.log("Error: An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    handleTasks();
  }, []);

  useEffect(() => {
    if (apiResponse !== null && apiResponse !== "NO TASKS") {
      const grouped = groupTasksByStatus(apiResponse);
      setFlatApi(flattenTasks(grouped));
    }
  }, [apiResponse]);

  const handleDragEnd = useCallback(
    ({ data }) => {
      const newData = [];
      let currentSection = null;
      data.forEach((item) => {
        if (item.isHeader) {
          currentSection = { ...item };
          newData.push(currentSection);
        } else {
          if (currentSection) {
            item.item.status = currentSection.item.name;
            newData.push(item);
          }
        }
      });
      setFlatApi(newData);
    },
    [setFlatApi]
  );

  const renderItem = ({ item, index, drag }) => (
    <TouchableOpacity
      style={item.isHeader ? taskList.headerContainer : {}}
      onLongPress={item.isHeader ? undefined : drag}
      onPress={
        item.isHeader
          ? undefined
          : () => {
              setTask(item.item);
              setModalVisible(true);
            }
      }
    >
      {item.isHeader ? (
        <CustomTitle text={item.item.name} type={"small"} />
      ) : (
        <TaskView
          task={item.item}
          onPressEdit={onPressEdit}
          updateTask={setTask}
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
            item.isHeader ? `header-${item.item.name}` : `task-${item.item.id}`
          }
          onDragEnd={handleDragEnd}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
  // }
};

export default TaskList;
