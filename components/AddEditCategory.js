import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomTitle from "./CustomTitle";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CloseIcon from "./CloseIcon";
import { sheet } from "../styles/components/sheet";
import { useUser } from "../context/UserContext";
import axiosInstance from "../api/axiosInstance";

const AddEditTask = ({
  action,
  isVisible,
  toggleVisibility,
  categoryEdit,
  setRefreshing,
}) => {
  const [category, setCategory] = useState("");
  const { user } = useUser();

  const refRBSheet = useRef();

  const title = action === "add" ? "Add category" : "Edit category";
  const button = action === "add" ? "Add" : "Save";

  useEffect(() => {
    if (isVisible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [isVisible]);

  useEffect(() => {
    if (action === "edit" && categoryEdit) {
      setCategory(categoryEdit.name || "");
    }
    if (action === "add") {
      setCategory("");
    }
  }, [categoryEdit, action]);

  const handleCategory = async () => {
    if (category === "") {
      alert("Category is empty or invalid.");
      return;
    }

    const payload = {
      user_id: user.id,
      name: category,
      ...(action === "edit" && { id: categoryEdit.id }),
    };
    const endpoint =
      action === "add"
        ? "/categories/createCategory"
        : "/categories/editCategory";
    const axiosMethod =
      action === "add" ? axiosInstance.post : axiosInstance.put;

    try {
      await axiosMethod(endpoint, payload);
      setRefreshing((prevState) => !prevState);
      toggleVisibility();
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
    <View style={sheet.container}>
      <RBSheet
        closeOnPressMask={false}
        ref={refRBSheet}
        customStyles={{
          container: {
            ...sheet.sheetStyles,
            ...sheet.sheetCategory,
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
      >
        <View>
          <View style={sheet.header}>
            <CustomTitle text={title} />
            <CloseIcon onPress={toggleVisibility} />
          </View>
          <CustomInput
            label="Category"
            placeholder="Write your category"
            value={category}
            onChangeValue={(value) => setCategory(value)}
            type="text"
          />
        </View>
        <View style={sheet.footer}>
          <CustomButton
            type="small"
            text={button}
            onPress={() => handleCategory()}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default AddEditTask;
