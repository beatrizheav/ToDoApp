import React, { useState } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import InputDatePicker from "../components/InputDatePicker";

const Main = () => {
  const [date, setDate] = useState();

  return (
    <View style={containers.main}>
      <InputDatePicker label={"Due Date"} date={date} setDate={setDate} />
    </View>
  );
};
export default Main;
