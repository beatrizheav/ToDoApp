import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const horizontalCalendar = StyleSheet.create({
  calendarStrip: { height: 100, paddingVertical: 20, paddingBottom: 10 },
  iconCalendar: { flex: 0.1 },
  dotSelectedDate: {
    backgroundColor: colorsTheme.softYellow,
  },
});
