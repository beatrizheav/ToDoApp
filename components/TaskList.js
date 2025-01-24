import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import data2 from "../data/tasks.json";
import CustomTitle from "./CustomTitle";

const TaskList = () => {
  // Group tasks by status
  const groupTasks = (tasks) => {
    return tasks.reduce((acc, task) => {
      const { status } = task;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(task);
      return acc;
    }, {});
  };

  // Initialize tasksGrouped from grouped tasks
  const [tasksGrouped, setTasksGrouped] = useState(groupTasks(data2));

  // Flatten grouped data for DraggableFlatList
  const flatListDataGrouped = Object.entries(tasksGrouped).reduce(
    (acc, [status, tasks]) => {
      const sectionHeader = {
        item: {
          id: `header-${status}`,
          name: status,
          isHeader: true,
        },
        isHeader: true,
      };

      const items = tasks.map((task) => ({
        item: task,
        isHeader: false,
      }));

      return [...acc, sectionHeader, ...items];
    },
    []
  );

  // Handle drag end event and update the tasksGrouped state
  const handleDragEndGrouped = ({ data }) => {
    const newGroupedData = {};
    let currentSection = null;

    // Process the rearranged data after dragging
    data.forEach((item) => {
      if (item.isHeader) {
        // If it's a header, start a new section
        currentSection = { status: item.item.name, tasks: [] };
        newGroupedData[currentSection.status] = currentSection.tasks;
      } else {
        // If it's a task, add it to the current section
        currentSection.tasks.push(item.item);
      }
    });

    // Update the tasksGrouped state with the new sectioned data
    setTasksGrouped(newGroupedData);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <DraggableFlatList
          data={flatListDataGrouped}
          renderItem={({ item, index, drag }) => (
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
          )}
          keyExtractor={
            (item) =>
              item.isHeader
                ? `header-${item.item.name}` // Header key
                : `task-${item.item.id}` // Task key
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
