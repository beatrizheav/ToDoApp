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
  const [detailsModalVisible, setDetailsModalVisible] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [action, setAction] = useState("edit");
  const [refresh, setRefresh] = useState(0);

  const toggleSheetVisibility = () => {
    setIsSheetVisible((prevState) => !prevState);
  };

  const handleEditTask = () => {
    toggleSheetVisibility();
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
          key={`${selectedDate}-${isSheetVisible}-${refresh}`}
          date={selectedDate.toISOString().slice(0, 10)}
          setModalVisible={setDetailsModalVisible}
          handleEditTask={handleEditTask}
          setRefresh={setRefresh}
        />
      </GestureHandlerRootView>
      {isSheetVisible && (
        <AddEditTask
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheetVisibility}
          action={action}
        />
      )}
      <NavBar toggleSheet={toggleSheetVisibility} setAction={setAction} />
      <TaskDetailModal
        visible={detailsModalVisible}
        setVisible={setDetailsModalVisible}
        onPress={handleEditTask}
      />
    </View>
  );
};

export default Main;
