import React, { useState } from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { format } from "date-fns";
import DateTimePicker from "@react-native-community/datetimepicker";
import { inputDakePicker } from "../styles/components/inputDatePicker";
import { inputs } from "../styles/components/inputs";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";

const DatePickerModal = ({ show, setShow, date, onChange }) => (
  <Modal visible={show} animationType="fade" transparent={true}>
    <View style={inputDakePicker.modalBackground}>
      <View style={inputDakePicker.modalContainer}>
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
          themeVariant="light"
          minimumDate={new Date()}
        />
        <TouchableOpacity onPress={() => setShow(false)}>
          <Text style={fontsTheme.regular}>Select Date</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const InputDatePicker = ({ label, date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const isToday = (dateToCheck) => {
    const today = new Date();
    return (
      dateToCheck.getDate() === today.getDate() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getFullYear() === today.getFullYear()
    );
  };

  const formattedDate = isToday(date) ? "Today" : format(date, "MMMM dd, yyyy");

  return (
    <View>
      <Text style={fontsTheme.regular}>{label}</Text>
      <TouchableOpacity
        style={[inputs.inputContainer, inputs.rowContainer]}
        onPress={() => setShow((prevState) => !prevState)}
        accessible={true}
        accessibilityLabel="Open Date Picker"
        accessibilityRole="button"
      >
        <Text style={fontsTheme.regular}>{formattedDate}</Text>
        <Entypo
          name="chevron-small-right"
          size={24}
          color={colorsTheme.lightGray}
        />
      </TouchableOpacity>
      <DatePickerModal
        show={show}
        setShow={setShow}
        date={date}
        onChange={onChange}
      />
    </View>
  );
};

InputDatePicker.defaultProps = {
  date: new Date(),
};

export default InputDatePicker;
