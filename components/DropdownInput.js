import React from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { inputs } from "../styles/components/inputs";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { dropdownInput } from "../styles/components/dropdown-input";
import priorityData from "../data/prioritys.json";
import categoryData from "../data/categories.json";

const DropdownInput = ({ label, type, value, onChange, placeholder }) => {
  const handleChange = (item) => {
    onChange(item.value);
  };

  const data = type === "priority" ? priorityData : categoryData;

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
        dropdownPosition="top"
        containerStyle={dropdownInput.dropContainer}
        backgroundColor={colorsTheme.blackOpacity}
      />
    </View>
  );
};

export default DropdownInput;
