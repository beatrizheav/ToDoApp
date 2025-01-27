import "react-native-gesture-handler"; // this must be at the top
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
      <GestureHandlerRootView>
        <TaskList date={selectedDate.toISOString().slice(0, 10)} />
      </GestureHandlerRootView>
    </View>
  );
};

export default Main;
