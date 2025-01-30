import { StyleSheet } from "react-native";

export const addEditCategory = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },
  sheetStyles: {
    container: {
      height: "40%",
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
