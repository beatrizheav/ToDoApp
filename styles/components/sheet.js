import { StyleSheet } from "react-native";

export const sheet = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },
  sheetStyles: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  sheetTask: {
    height: "80%",
  },
  sheetCategory: {
    height: "35%",
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
