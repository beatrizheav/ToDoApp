import { Text } from "react-native";
import { fontsTheme } from "../styles/fontsTheme";

const CustomTitle = ({ text, type }) => {
  return type === "big" ? (
    <Text style={[fontsTheme.title, fontsTheme.titleBig]}>{text}</Text>
  ) : (
    <Text style={[fontsTheme.title, fontsTheme.titleSmall]}>{text}</Text>
  );
};

export default CustomTitle;
