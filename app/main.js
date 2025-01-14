import React from "react";
import { View } from "react-native";
import CustomButton from "../components/CustomButton";
import { containers } from "../styles/containers";

const Main = () => {
  return (
    <View style={containers.main}>
      <CustomButton text={"Sign up"} type={"big"} />
      <CustomButton text={"Add"} type={"small"} />
    </View>
  );
};
export default Main;
