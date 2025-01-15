import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import InputDatePicker from "../components/InputDatePicker";
import CustomInput from "../components/CustomInput";

const Main = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [paragraph, onChangeParagraph] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <View style={containers.main}>
      <InputDatePicker label={"Due Date"} date={date} setDate={setDate} />
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
