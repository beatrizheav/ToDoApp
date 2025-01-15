import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import InputDatePicker from "../components/InputDakePicker";

const Main = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [paragraph, onChangeParagraph] = useState("");

  return (
    <View style={containers.main}>
      <InputDatePicker />
    </View>
  );
};
export default Main;
