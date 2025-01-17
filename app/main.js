import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import TaskView from "../components/TaskView";

const Main = () => {
  return (
    <View style={containers.main}>
      <TaskView name={"Send email"} priority={"High"} category={"Work"} />
    </View>
  );
};
export default Main;
