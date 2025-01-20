import React from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import CategoryView from "../components/CategoryView";

const Main = () => {
  const task = {
    id: "1",
    title: "Task 1",
    description: "Description of Task 1",
    date: "2025-01-20",
    priority: "Low",
    category: "Work",
  };

  return (
    <View style={containers.main}>
      <CategoryView />
    </View>
  );
};
export default Main;
