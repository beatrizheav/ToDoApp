import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import DraggableFlatList from "react-native-draggable-flatlist";
import TaskView from "./TaskView";
import data2 from "../data/tasks.json";
import CustomTitle from "./CustomTitle";

// Flatten tasks into a format suitable for DraggableFlatList
const flattenTasks = (tasks) => {
  const sections = ["to do", "in progress", "done"]; // Ensure order
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
      // If there are tasks, flatten them into the list
      const taskItems = tasks[section].map((task) => ({
        item: task,
        isHeader: false,
      }));
      flattened.push(...taskItems);
    }
  });

  return flattened;
};

const TaskList = ({ date }) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    // Filter the data for the selected date
    if (data2[date]) {
      setTasks(data2[date]);
    } else {
      setTasks(null); // Handle case if no data exists for the selected date
    }
  }, [date]);

  console.log("TASKS BY DATE", tasks);

  // Flatten grouped tasks for display in DraggableFlatList
  const flatListData = flattenTasks(tasks);

  console.log(flatListData);

  // Handle the drag and drop logic to update the task order
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
      <SafeAreaView style={styles.container}>
        <DraggableFlatList
          style={styles.flatList}
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

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    marginLeft: 10,
  },
  flatList: {
    height: "100%",
  },
  headerContainer: {
    paddingVertical: 10,
    paddingLeft: 16,
  },
});

export default TaskList;
