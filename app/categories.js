import React from "react";
import { View, Text } from "react-native";
import { containers } from "../styles/containers";
import AddEditTask from "../components/AddEditTask";

const Categories = () => {
  return (
    <View style={containers.safeArea}>
      <Text>Categories Screen</Text>
      <AddEditTask />
    </View>
  );
};

export default Categories;
