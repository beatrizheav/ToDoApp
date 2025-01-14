import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import CustomInput from "../components/CustomInput";

const Main = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [paragraph, onChangeParagraph] = useState("");

  return (
    <View style={containers.main}>
      <CustomInput
        type={"text"}
        label={"Name"}
        placeholder={"Ingresa tu nombre"}
        value={name}
        onChangeValue={onChangeName}
      />
      <CustomInput
        type={"email"}
        label={"Email address"}
        placeholder={"example@gmail.com"}
        value={email}
        onChangeValue={onChangeEmail}
      />
      <CustomInput
        type={"password"}
        label={"Password"}
        placeholder={"Enter password"}
        value={password}
        onChangeValue={onChangePassword}
      />
      <CustomInput
        type={"paragraph"}
        label={"Description"}
        placeholder={"Add a descripion"}
        value={paragraph}
        onChangeValue={onChangeParagraph}
      />
    </View>
  );
};
export default Main;
