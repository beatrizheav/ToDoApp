import React from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { inputs } from "../styles/components/inputs";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { dropdownInput } from "../styles/components/dropdown-input";

const DropdownInput = ({ label, type, value, onChange, placeholder }) => {
  const handleChange = (item) => {
    onChange(item.value);
  };

  const priorityData = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const categoryData = [
    { label: "House", value: "house" },
    { label: "Work", value: "work" },
    { label: "Personal", value: "personal" },
    { label: "Shopping", value: "shopping" },
    { label: "Groceries", value: "groceries" },
    { label: "Health", value: "health" },
    { label: "Fitness", value: "fitness" },
    { label: "Study", value: "study" },
    { label: "Family", value: "family" },
    { label: "Finance", value: "finance" },
    { label: "Vacation", value: "vacation" },
  ];

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
