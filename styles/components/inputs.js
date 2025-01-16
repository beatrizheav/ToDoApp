import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const inputs = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  inputContainer: {
    height: 56,
    width: "100%",
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
