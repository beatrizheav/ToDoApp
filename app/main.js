import React from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import CustomInput from "../components/CustomInput";

const Main = () => {
  const [name, onChangeName] = React.useState("");

  return (
    <View style={containers.main}>
      <CustomInput
        label={"Name"}
        placeholder={"Ingresa tu nombre"}
        value={name}
        onChangeValue={onChangeName}
      />
    </View>
  );
};
export default Main;
