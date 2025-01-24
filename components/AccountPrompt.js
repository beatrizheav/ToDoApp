import { View, Text, TouchableOpacity } from "react-native";
import { fontsTheme } from "../styles/fontsTheme";
import { accountPrompt } from "../styles/components/account-prompt";

const AccountPrompt = ({ text, textPressable, onPress }) => {
  return (
    <View style={accountPrompt.noAccount}>
      <Text style={fontsTheme.regular}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={fontsTheme.semiBold}>{textPressable}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPrompt;
