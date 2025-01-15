// import { Text } from "react-native";
// import { fontsTheme } from "../styles/fontsTheme";

// const InputDatePicker = ({}) => {
//   return <Text>Hola</Text>;
// };

// export default InputDatePicker;

import React, { useState } from "react";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";

const InputDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      {/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}
    </>
  );
};

export default InputDatePicker;
