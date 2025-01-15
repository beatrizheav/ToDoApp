import React, { useState } from "react";
import { Button, View, Modal, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";
import { inputDakePicker } from "../styles/components/inputDatePicker";
// import { format } from "date-fns";

const InputDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  // <Text>{format(date, 'MMMM dd, yyyy')}</Text>

  return (
    <View style={inputDakePicker.container}>
      <Button title="Open Modal" onPress={() => setShow(true)} />
      <Text>{date.toString()}</Text>
      <Modal visible={show} animationType="fade" transparent={false}>
        <View style={inputDakePicker.modalBackground}>
          <View style={inputDakePicker.modalContainer}>
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              visible={show}
              onChange={onChange}
              themeVariant="light"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputDatePicker;
