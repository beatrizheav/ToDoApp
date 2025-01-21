import React from "react";
import { View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { format } from "date-fns";
import CustomTitle from "../components/CustomTitle";
import { horizontalCalendar } from "../styles/components/horizontal-calendar";
import { fontsTheme } from "../styles/fontsTheme";

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
        highlightDateContainerStyle={horizontalCalendar.dotSelectedDate}
        dateNameStyle={fontsTheme.regularSmall}
        dateNumberStyle={fontsTheme.semiBold}
        highlightDateNameStyle={fontsTheme.regularSmall}
        highlightDateNumberStyle={fontsTheme.semiBold}
      />
      <CustomTitle text={formattedDate} type={"big"} />
    </View>
  );
};

export default HorizontalCalendar;
