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
  const [action, setAction] = useState("edit");

  const toggleSheet = () => {
    setIsSheetVisible(!isSheetVisible);
  };

  const onPressEdit = () => {
    setTask(task);
    toggleSheet();
    setAction("edit");
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
          setModalVisible={setDetailTaskVisible}
          onPressEdit={onPressEdit}
          setTask={setTask}
        />
      </GestureHandlerRootView>
      <NavBar toggleSheet={toggleSheet} setAction={setAction} />
      <TaskDetailModal
        task={task}
        visible={detailTaskVisible}
        setVisible={setDetailTaskVisible}
      />
      {isSheetVisible && (
        <AddEditTask
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheet}
          action={action}
          task={task}
        />
      )}
    </View>
  );
};

export default Main;
