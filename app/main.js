import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import TaskView from "../components/TaskView";

const Main = () => {
  return (
    <View style={containers.main}>
      <TaskView />
    </View>
  );
};
export default Main;
