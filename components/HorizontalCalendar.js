import React from "react";
import { View } from "react-native";
import { format } from "date-fns";
import CalendarStrip from "react-native-calendar-strip";
import { colorsTheme } from "../styles/colorsTheme";
import { fontsTheme } from "../styles/fontsTheme";
import CustomTitle from "../components/CustomTitle";
import { horizontalCalendar } from "../styles/components/horizontal-calendar";

const HorizontalCalendar = ({ selectedDate, setSelectedDate }) => {
  const handleDateSelected = (date) => setSelectedDate(new Date(date));

  const oneWeekBefore = new Date();
  oneWeekBefore.setDate(oneWeekBefore.getDate() - 7);

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formattedDate = isToday(selectedDate)
    ? "Today"
    : format(selectedDate, "MMMM dd, yyyy");

  return (
    <View>
      <CalendarStrip
        style={horizontalCalendar.calendarStrip}
        calendarHeaderStyle={fontsTheme.semiBold}
        iconContainer={horizontalCalendar.iconCalendar}
        minDate={oneWeekBefore}
        selectedDate={selectedDate}
        onDateSelected={handleDateSelected}
        highlightDateContainerStyle={{
          backgroundColor: colorsTheme.softYellow,
        }}
        dateNameStyle={fontsTheme.small}
        dateNumberStyle={fontsTheme.semiBold}
        highlightDateNameStyle={fontsTheme.small}
        highlightDateNumberStyle={fontsTheme.semiBold}
      />
      <CustomTitle text={formattedDate} type={"big"} />
    </View>
  );
};

export default HorizontalCalendar;
