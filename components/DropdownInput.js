import React from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { inputs } from "../styles/components/inputs";
import { fontsTheme } from "../styles/fontsTheme";

const DropdownInput = ({ label, data, value, onChange, placeholder }) => {
  const handleChange = (item) => {
    onChange(item.value);
  };

  return (
    <View style={inputs.container}>
      <Text style={fontsTheme.regular}>{label}</Text>
      <Dropdown
        style={inputs.inputContainer}
        placeholderStyle={[fontsTheme.regular, fontsTheme.opacity70]}
        selectedTextStyle={fontsTheme.regular}
        itemTextStyle={fontsTheme.regular}
        showsVerticalScrollIndicator={true}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </View>
  );
};

export default DropdownInput;
