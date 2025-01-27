import "react-native-gesture-handler"; // this must be at the top
import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import HorizontalCalendar from "../components/HorizontalCalendar";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import NavBar from "../components/NavBar";
import TaskDetailModal from "../components/TaskDetailModal";

import TaskList from "../components/TaskList";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailTaskVisible, setDetailTaskVisible] = useState(false);
  const [task, setTask] = useState("");

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
      <NavBar />
      <TaskDetailModal
        task={task}
        visible={detailTaskVisible}
        setVisible={setDetailTaskVisible}
      />
    </View>
  );
};

export default Main;
