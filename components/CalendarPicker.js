import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";
import { colorsTheme } from "../styles/colorsTheme";

const CalendarPicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const onDateSelect = (day) => {
    setSelectedDate(day.dateString);
    console.log(day.dateString);
    setShowCalendar(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowCalendar(true)}>
        <Icon name="calendar" size={30} color="#000" />
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={showCalendar}
        animationType="fade"
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={onDateSelect}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  marked: true,
                  selectedColor: colorsTheme.softYellow,
                  selectedTextColor: colorsTheme.darkBlue,
                },
              }}
              theme={{
                backgroundColor: "red",
                todayTextColor: colorsTheme.vividRed,
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCalendar(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {selectedDate ? <Text>Selected Date: {selectedDate}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    height: 400,
    width: 300,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CalendarPicker;
