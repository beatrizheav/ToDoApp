import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity, ActivityIndicator, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import CustomTitle from "./CustomTitle";
import axiosInstance from "../api/axiosInstance";
import data from "../data/tasks.json";
import { taskList } from "../styles/components/task-list";
import { colorsTheme } from "../styles/colorsTheme";

const groupTasksByStatus = (tasks) => {
  const grouped = {
    "to do": [],
    "in progress": [],
    done: [],
  };

  tasks.forEach((task) => {
    // Check if the status of the task exists in the grouped object
    if (grouped[task.status]) {
      grouped[task.status].push(task); // Add task to the corresponding status array
    } else {
      console.warn(`Unknown status for task: ${task.status}`);
    }
  });

  return grouped;
};

// Flatten tasks into a format suitable for DraggableFlatList
const flattenTasks = (tasks) => {
  const sections = ["to do", "in progress", "done"];
  const flattened = [];

  sections.forEach((section) => {
    // Add section header
    const sectionHeader = {
      item: { id: `header-${section}`, name: section, isHeader: true },
      isHeader: true,
    };
    flattened.push(sectionHeader);

    // Check if there are tasks in this section
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
  const [groupedTasks, setGroupedTasks] = useState(null);
  const [flatApi, setFlatApi] = useState(null);

  const pruebaApiData = {
    date: date,
    user: 1,
  };

  const handleTasks = async () => {
    try {
      const response = await axiosInstance.get("/tasks/userTasks", {
        params: pruebaApiData,
      });
      setApiResponse(response.data);
    } catch (error) {
      if (error.response) {
        const errorMessage =
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

  useEffect(() => {
    handleTasks();
  }, []);

  // Use useEffect to wait until tasks are not null
  useEffect(() => {
    if (apiResponse !== null) {
      // Group tasks by status
      const grouped = groupTasksByStatus(apiResponse);
      setGroupedTasks(grouped);

      // Flatten tasks
      const flattened = flattenTasks(grouped);
      setFlatApi(flattened);
    }
  }, [apiResponse]); // The effect runs when the tasks prop changes

  console.error("flatTasks,", flatApi);

  const handleDragEnd = useCallback(
    ({ data }) => {
      const newData = [];
      let currentSection = null;

      // Iterate over the data
      data.forEach((item) => {
        if (item.isHeader) {
          // Header indicates a new section
          currentSection = { ...item }; // Create a copy of the header
          newData.push(currentSection); // Add the header
        } else {
          // Task item goes into the current section
          if (currentSection) {
            // Update the task status based on the section header
            item.item.status = currentSection.item.name; // Update the task's status
            newData.push(item); // Add the task to the newData array
          }
        }
      });

      // Update the state with new data
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

  if (flatApi === null) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={taskList.container}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={colorsTheme.blackOpacity} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={taskList.container}>
          <DraggableFlatList
            style={taskList.flatList}
            data={flatApi}
            renderItem={renderItem}
            keyExtractor={(item) =>
              item.isHeader
                ? `header-${item.item.name}`
                : `task-${item.item.id}`
            }
            onDragEnd={handleDragEnd}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
};

export default TaskList;
