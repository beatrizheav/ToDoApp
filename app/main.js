import React from "react";
import CustomTitle from "../components/CustomTitle";
import { View } from "react-native";
import { containers } from "../styles/containers";

const Main = () => {
  return (
    <View style={containers.main}>
      <CustomTitle text={"Titulo grande"} type={"big"} />
      <CustomTitle text={"Titulo chico"} type={"small"} />
    </View>
  );
};
export default Main;
