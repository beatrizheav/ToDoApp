import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import data2 from "../data/tasks.json";
import CustomTitle from "./CustomTitle";

// Group tasks by their status
const groupTasksByStatus = (tasks) => {
  return tasks.reduce((acc, task) => {
    const { status } = task;
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(task);
    return acc;
  }, {});
};

// Flatten grouped tasks into a format suitable for DraggableFlatList
const flattenGroupedTasks = (groupedTasks) => {
  return Object.entries(groupedTasks).reduce((acc, [status, tasks]) => {
    const sectionHeader = {
      item: { id: `header-${status}`, name: status, isHeader: true },
      isHeader: true,
    };

    const taskItems = tasks.map((task) => ({
      item: task,
      isHeader: false,
    }));

    return [...acc, sectionHeader, ...taskItems];
  }, []);
};

const TaskList = ({ date }) => {
  const [tasksGrouped, setTasksGrouped] = useState({});

  // Function to filter tasks based on the given date
  const filterTasksByDate = (tasks, date) => {
    return tasks.filter((task) => task.dueDate === date);
  };

  // Filter and group tasks by status when date prop changes
  useEffect(() => {
    const filteredTasks = filterTasksByDate(data2, date);
    const groupedTasks = groupTasksByStatus(filteredTasks);
    setTasksGrouped(groupedTasks);
  }, [date]); // Re-run when the `date` prop changes

  // Flatten grouped tasks for display in DraggableFlatList
  const flatListDataGrouped = flattenGroupedTasks(tasksGrouped);

  // Handle the drag and drop logic to update the task order
  const handleDragEndGrouped = useCallback(
    ({ data }) => {
      const newGroupedData = {};
      let currentSection = null;

      data.forEach((item) => {
        if (item.isHeader) {
          // Header indicates a new section
          currentSection = { status: item.item.name, tasks: [] };
          newGroupedData[currentSection.status] = currentSection.tasks;
        } else {
          // Task item goes into the current section
          currentSection.tasks.push(item.item);
        }
      });

      // Update state with new order of tasks
      setTasksGrouped(newGroupedData);
    },
    [setTasksGrouped]
  );

  // Render function for DraggableFlatList items
  const renderItem = ({ item, index, drag }) => (
    <TouchableOpacity
      style={item.isHeader ? styles.headerContainer : {}}
      onLongPress={item.isHeader ? undefined : drag}
    >
      {item.isHeader ? (
        <CustomTitle text={item.item.name} type={"small"} />
      ) : (
        <TaskView task={item.item} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <DraggableFlatList
          data={flatListDataGrouped}
          renderItem={renderItem}
          keyExtractor={(item) =>
            item.isHeader ? `header-${item.item.name}` : `task-${item.item.id}`
          }
          onDragEnd={handleDragEndGrouped}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    marginLeft: 10,
  },
  headerContainer: {
    paddingVertical: 10,
    paddingLeft: 16,
  },
});

export default TaskList;
