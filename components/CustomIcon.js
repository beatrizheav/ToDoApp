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
  type,
  task,
  setRefresh,
  category,
}) => {
  const { user } = useUser();
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

  const handleDelete = async () => {
    const id = type === "category" ? category.id : task.id;

    const endpoint =
      type === "category" ? "/categories/deleteCategory" : "/tasks/deleteTask";

    const payload =
      type === "category" ? { id: id, userId: user.id } : { id: id };
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
          visible={modalVisible}
          title={confirmTitle}
          description={confirmText}
          setVisible={setModalVisible}
          confirmAction={handleDelete}
        />
      )}
    </View>
  );
};

export default CustomIcon;
