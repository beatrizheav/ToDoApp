import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import CustomTitle from "./CustomTitle";
import axiosInstance from "../api/axiosInstance";
import { taskList } from "../styles/components/task-list";
import { useUser } from "../context/UserContext";
import { useTask } from "../context/TaskContext";

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

const flattenTasks = (tasks) => {
  return SECTIONS.flatMap((section) => [
    {
      item: { id: `header-${section}`, name: section, isHeader: true },
      isHeader: true,
    },
    ...(tasks[section] || []).map((task) => ({ item: task, isHeader: false })),
  ]);
};

const TaskList = ({ date, setModalVisible, onPressEdit, setRefresh }) => {
  const [flatApi, setFlatApi] = useState(
    SECTIONS.map((section) => ({
      isHeader: true,
      item: { id: `header-${section}`, isHeader: true, name: section },
    }))
  );
  const [apiResponse, setApiResponse] = useState(null);
  const { user } = useUser();
  const { updateTask } = useTask();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosInstance.get("/tasks/userTasks", {
          params: { date, user: user.id },
        });
        setApiResponse(data);
      } catch (error) {
        console.error(
          "Error fetching tasks:",
          error.response?.data?.message || error.message
        );
        setApiResponse(error.response?.status === 404 ? "NO TASKS" : null);
      }
    };
    fetchTasks();
  }, [date, user.id]);

  useEffect(() => {
    if (apiResponse && apiResponse !== "NO TASKS") {
      setFlatApi(flattenTasks(groupTasksByStatus(apiResponse)));
    }
  }, [apiResponse]);

  const handleDragEnd = useCallback(({ data, to }) => {
    if (to === 0) {
      return;
    }

    let currentSection = null;
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
  }, []);

  const renderItem = ({ item, drag }) => (
    <TouchableOpacity
      style={item.isHeader ? taskList.headerContainer : {}}
      onLongPress={item.isHeader ? undefined : drag}
      onPress={
        item.isHeader
          ? undefined
          : () => {
              updateTask(item.item);
              setModalVisible(true);
            }
      }
    >
      {item.isHeader ? (
        <CustomTitle text={item.item.name} type="small" />
      ) : (
        <TaskView
          task={item.item}
          onPressEdit={onPressEdit}
          setRefresh={setRefresh}
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
