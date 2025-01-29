import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import CustomTitle from "./CustomTitle";
import data2 from "../data/tasks.json";
import { taskList } from "../styles/components/task-list";

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
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (data2[date]) {
      setTasks(data2[date]);
    } else {
      setTasks(null);
    }
  }, [date]);

  const flatListData = flattenTasks(tasks);

  const handleDragEnd = useCallback(
    ({ data }) => {
      const newData = {};
      let currentSection = null;

      data.forEach((item) => {
        if (item.isHeader) {
          // Header indicates a new section
          currentSection = { status: item.item.name, tasks: [] };
          newData[currentSection.status] = currentSection.tasks;
        } else {
          // Task item goes into the current section
          currentSection.tasks.push(item.item);
        }
      });

      // Update state with new order of tasks
      setTasks(newData);
    },
    [setTasks]
  );

  const renderItem = ({ item, index, drag }) => (
    <TouchableOpacity
      style={item.isHeader ? taskList.headerContainer : {}}
      onLongPress={item.isHeader ? undefined : drag}
      onPress={() => {
        setTask(item.item);
        setModalVisible(true);
      }}
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
          data={flatListData}
          renderItem={renderItem}
          keyExtractor={(item) =>
            item.isHeader ? `header-${item.item.name}` : `task-${item.item.id}`
          }
          onDragEnd={handleDragEnd}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TaskList;
