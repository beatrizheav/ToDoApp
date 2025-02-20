import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomAlert from "./CustomAlert";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";
import { customIcon } from "../styles/components/custom-icon";
import { colorsTheme } from "../styles/colorsTheme";

const CustomIcon = ({ name, item, onPress, setRefresh, iconColor }) => {
  const { user } = useUser();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  // Determines the background color and icon color for the custom icon component.

  //Sets a default background color based on the icon name.
  const defaultIconBackground =
    name === "edit" ? customIcon.blue : customIcon.red;
  // If `iconColor` is provided, no background is applied otherwise, it falls back to `defaultIconBackground`.
  const background = iconColor ? {} : defaultIconBackground;
  // Uses `iconColor` if provided, otherwise defaults to `colorsTheme.white`.
  const colorIcon = iconColor || colorsTheme.white;

  const onPressAction = () => {
    if (onPress) {
      onPress();
    } else {
      //if not onPress action is recieved the icon use it is delete so opens the modal
      setDeleteModalVisible(true);
    }
  };

  // Determines whether the type is "task" or "category" based on the item's content.
  const type = item?.description ? "task" : item ? "category" : "";

  //Delete the category/task from the db
  const handleDelete = async () => {
    const id = item.id;

    const endpoint =
      type === "task" ? "/tasks/deleteTask" : "/categories/deleteCategory";

    const payload = type === "task" ? { id: id } : { id: id, userId: user.id };
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
        <MaterialIcons name={name} size={22} color={colorIcon} />
      </TouchableOpacity>
      {name === "delete" && (
        <CustomAlert
          visible={deleteModalVisible}
          setVisible={setDeleteModalVisible}
          type={type === "category" ? "category" : "task"}
          confirmAction={handleDelete}
        />
      )}
    </View>
  );
};

export default CustomIcon;
