import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customInput = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  inputContainer: {
    height: 56,
    width: "100%",
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  paragraphContainer: {
    height: 80,
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputPassword: {
    width: "90%",
    height: "100%",
  },
  inputText: {
    width: "100%",
    height: "100%",
  },
  inputParagraph: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconPassword: {
    height: "100%",
    width: "10%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
