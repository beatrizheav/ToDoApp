import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import HorizontalCalendar from "../components/HorizontalCalendar";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView

import TaskList from "../components/TaskList";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <View style={containers.safeArea}>
      <HorizontalCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TaskList />
    </View>
  );
};

export default Main;
