import { StyleSheet } from "react-native";

export const addEditTask = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetStyles: {
    container: {
      height: "80%",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingTop: 20,
      paddingBottom: 40,
      paddingHorizontal: 20,
      justifyContent: "space-between",
    },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
