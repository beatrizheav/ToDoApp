import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { containers } from "../styles/containers";
import HorizontalCalendar from "../components/HorizontalCalendar";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import NavBar from "../components/NavBar";
import TaskDetailModal from "../components/TaskDetailModal";

import TaskList from "../components/TaskList";
import AddEditTask from "../components/AddEditTask";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailTaskVisible, setDetailTaskVisible] = useState(false);
  const [task, setTask] = useState("");

  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const toggleSheet = () => {
    setIsSheetVisible(!isSheetVisible);
  };

  return (
    <View style={containers.safeArea}>
      <HorizontalCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <GestureHandlerRootView>
        <TaskList
          date={selectedDate.toISOString().slice(0, 10)}
          setTask={setTask}
          setModalVisible={setDetailTaskVisible}
        />
      </GestureHandlerRootView>
      <NavBar add={toggleSheet} />
      <TaskDetailModal
        task={task}
        visible={detailTaskVisible}
        setVisible={setDetailTaskVisible}
      />
      {isSheetVisible && (
        <AddEditTask
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheet}
          action={"edit"}
          task={task}
        />
      )}
    </View>
  );
};

export default Main;
