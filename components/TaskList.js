import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";

const data2 = [
  {
    id: 1,
    name: "Buy groceries",
    description: "Purchase ingredients for the week.",
    dueDate: "2025-01-20T10:00:00Z",
    priority: "high",
    category: "house",
    status: "to do",
  },
  {
    id: 2,
    name: "Finish project report",
    description: "Complete and submit the final report for the work project.",
    dueDate: "2025-01-18T17:00:00Z",
    priority: "high",
    category: "work",
    status: "in progress",
  },
  {
    id: 3,
    name: "Morning workout",
    description: "Do a 30-minute cardio workout.",
    dueDate: "2025-01-16T07:00:00Z",
    priority: "medium",
    category: "exercise",
    status: "done",
  },
];

const App = () => {
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
              style={item.isHeader ? styles.headerContainer : styles.item}
              onLongPress={item.isHeader ? undefined : drag}
            >
              {item.isHeader ? (
                <Text style={styles.header}>{item.item.name}</Text>
              ) : (
                <Text style={styles.title}>{item.item.name}</Text>
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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginLeft: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 16,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default App;
