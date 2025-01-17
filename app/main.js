import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";

import TaskView from "../components/TaskView";
import HorizontalCalendar from "../components/HorizontalCalendar";

const Main = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={containers.main}>
      <HorizontalCalendar selectedDate={date} setSelectedDate={setDate} />
    </View>
  );
};
export default Main;
