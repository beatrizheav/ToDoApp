import React from "react";
import CustomTitle from "../components/CustomTitle";
import { View } from "react-native";

const Main = () => {
  return (
    <View>
      <CustomTitle text={"Titulo grande"} type={"big"} />,
      <CustomTitle text={"Titulo chico"} type={"small"} />
    </View>
  );
};
export default Main;
