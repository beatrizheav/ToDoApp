import React, { useState } from "react";
import { View, Text } from "react-native";
import { containers } from "../styles/containers";
import DropdownInput from "../components/DropdownInput";

const Main = () => {
  const [priority, setPriority] = useState(null);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View style={containers.main}>
      <Text>Selected Option: {priority || "None"}</Text>
      <DropdownInput
        label="Priority"
        data={options}
        value={priority}
        onChange={setPriority}
        placeholder="Select the priority"
      />
    </View>
  );
};
export default Main;
