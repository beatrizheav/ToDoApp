import React, { useState } from "react";
import { View, Text } from "react-native";
import { containers } from "../styles/containers";
import DropdownInput from "../components/DropdownInput";
import CustomInput from "../components/CustomInput";
import InputDatePicker from "../components/InputDatePicker";

const Main = () => {
  const [priority, setPriority] = useState(null);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [date, setDate] = useState(new Date());

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View style={containers.main}>
      <DropdownInput
        label="Priority"
        data={options}
        value={priority}
        onChange={setPriority}
        placeholder="Select the priority"
      />
      <CustomInput
        type={"text"}
        label={"Name"}
        placeholder={"Ingresa tu nombre"}
        value={name}
        onChangeValue={setName}
      />
      <CustomInput
        type={"password"}
        label={"Password"}
        placeholder={"Ingresa la contraseña"}
        value={password}
        onChangeValue={setPassword}
      />
      <CustomInput
        type={"email"}
        label={"Email"}
        placeholder={"Ingresa la contraseña"}
        value={mail}
        onChangeValue={setMail}
      />
      <CustomInput
        type={"paragraph"}
        label={"Paragraph"}
        placeholder={"Ingresa la contraseña"}
        value={paragraph}
        onChangeValue={setParagraph}
      />
      <InputDatePicker label={"Paragraph"} date={date} setDate={setDate} />
    </View>
  );
};
export default Main;
