import "react-native-gesture-handler";
import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import HorizontalCalendar from "../components/HorizontalCalendar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";
import TaskDetailModal from "../components/TaskDetailModal";
import TaskList from "../components/TaskList";
import AddEditTask from "../components/AddEditTask";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailTaskVisible, setDetailTaskVisible] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [task, setTask] = useState("");
  const [action, setAction] = useState("edit");
  const [refresh, setRefresh] = useState(0);

  const toggleSheetVisibility = () => {
    setIsSheetVisible((prevState) => !prevState);
  };

  const handleEditTask = () => {
    toggleSheetVisibility();
    setAction("edit");
  };

  console.error("REFRESH", refresh);

  return (
    <View style={containers.safeArea}>
      <HorizontalCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <GestureHandlerRootView>
        <TaskList
          key={`${selectedDate}-${isSheetVisible}-${refresh}`}
          date={selectedDate.toISOString().slice(0, 10)}
          setModalVisible={setDetailTaskVisible}
          onPressEdit={handleEditTask}
          setTask={setTask}
          setRefresh={setRefresh}
        />
      </GestureHandlerRootView>
      {isSheetVisible && (
        <AddEditTask
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheetVisibility}
          action={action}
          task={task}
        />
      )}
      <NavBar toggleSheet={toggleSheetVisibility} setAction={setAction} />
      <TaskDetailModal
        task={task}
        visible={detailTaskVisible}
        setVisible={setDetailTaskVisible}
        onPress={handleEditTask}
        setTask={setTask}
      />
    </View>
  );
};

export default Main;
