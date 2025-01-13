import { Text } from "react-native";
import { fontsTheme } from "../styles/fontsTheme";

const CustomTitle = ({ text, type }) => {
  return type === "big" ? (
    <Text style={[fontsTheme.title, { fontSize: 30 }]}>{text}</Text>
  ) : (
    <Text style={[fontsTheme.title, { fontSize: 20 }]}>{text}</Text>
  );
};

export default CustomTitle;
