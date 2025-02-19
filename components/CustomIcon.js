import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colorsTheme } from "../styles/colorsTheme";
import CustomAlert from "./CustomAlert";
import { customIcon } from "../styles/components/custom-icon";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";

const CustomIcon = ({
  name,
  iconColor,
  onPress,
  task,
  category,
  setRefresh,
}) => {
  const { user } = useUser();
  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const defaultIconBackground =
    name === "edit" ? customIcon.blue : customIcon.red;
  const background = iconColor ? {} : defaultIconBackground;
  const color = iconColor || colorsTheme.white;

  const onPressAction = () => {
    if (onPress) {
      onPress();
    } else {
      setAlertModalVisible(true);
    }
  };

  const handleDelete = async () => {
    const id = category ? category.id : task.id;

    const endpoint = category
      ? "/categories/deleteCategory"
      : "/tasks/deleteTask";

    const payload = category ? { id: id, userId: user.id } : { id: id };
    try {
      await axiosInstance.delete(endpoint, { params: payload });
      setRefresh(id);
    } catch (error) {
      let errorMessage;
      if (error.response) {
        errorMessage =
          error.response.data.message ||
          "Something went wrong while processing your request.";
        alert(errorMessage);
      } else if (error.request) {
        console.error("Request error:", error.request);
        alert("Error: No response from the server.");
      } else {
        console.error("Error message:", error.message);
        alert("Error: An unexpected error occurred.");
      }
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[customIcon.container, background]}
        onPress={onPressAction}
      >
        <MaterialIcons name={name} size={22} color={color} />
      </TouchableOpacity>
      {name === "delete" && (
        <CustomAlert
          visible={alertModalVisible}
          setVisible={setAlertModalVisible}
          type={category ? "category" : "task"}
          confirmAction={handleDelete}
        />
      )}
    </View>
  );
};

export default CustomIcon;
