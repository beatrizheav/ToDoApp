import React, { useState } from "react";
import { View, Text } from "react-native";
import { containers } from "../styles/containers";
import DropdownInput from "../components/DropdownInput";
import CustomInput from "../components/CustomInput";

const Main = () => {
  const [priority, setPriority] = useState(null);
  const [name, setName] = useState("");

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
    </View>
  );
};
export default Main;
