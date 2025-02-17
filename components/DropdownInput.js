import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { inputs } from "../styles/components/inputs";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { dropdownInput } from "../styles/components/dropdown-input";
import priorityData from "../data/prioritys.json";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";

const DropdownInput = ({ label, type, value, onChange, placeholder }) => {
  const [apiCategoryResponse, setApiCategoryResponse] = useState(null);
  const { user } = useUser();

  const handleChange = (item) => {
    onChange(item.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories/userCategories", {
          params: { user: user.id },
        });
        // Transform the API response to match Dropdown input requirements
        const transformedData = data.map((category) => ({
          label: category.name,
          value: category.id,
        }));
        setApiCategoryResponse(transformedData);
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchCategories();
  }, []);

  const data = type === "priority" ? priorityData : apiCategoryResponse;

  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
