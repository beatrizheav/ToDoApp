import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const profile = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  avatar: {
    height: 120,
    width: 120,
    alignSelf: "center",
    borderRadius: 60,
    backgroundColor: colorsTheme.softYellow,
    marginTop: 100,
  },
  title: { alignSelf: "center", marginTop: 15, marginBottom: 40 },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: 20,
  },
  passwordText: { marginLeft: 10, flex: 1 },
  mailText: { marginLeft: 10, textDecorationLine: "underline" },
});
