import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colorsTheme } from "../styles/colorsTheme";
import CustomAlert from "./CustomAlert";
import { customIcon } from "../styles/components/custom-icon";
import axiosInstance from "../api/axiosInstance";

const CustomIcon = ({ name, iconColor, onPress, type }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const defaultBackground = name === "edit" ? customIcon.blue : customIcon.red;
  const background = iconColor ? {} : defaultBackground;
  const color = iconColor || colorsTheme.white;
  const confirmTitle = "Delete " + type;
  const confirmText = "Are you sure you want to delete this " + type + "?";

  const onPressAction = () => {
    if (onPress) {
      onPress();
    } else {
      setModalVisible(true);
    }
  };

  const deleteTask = async () => {
    const taskId = 4; // Replace this with the task ID
    try {
      const response = await axiosInstance.delete("/tasks/deleteTask", {
        params: { id: taskId }, // Correct format for sending taskId as query param
      });
      console.log("Task deleted successfully:", response.data);
    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
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
          visible={modalVisible}
          title={confirmTitle}
          description={confirmText}
          setVisible={setModalVisible}
          confirmAction={deleteTask}
        />
      )}
    </View>
  );
};

export default CustomIcon;
