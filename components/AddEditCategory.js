import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomTitle from "./CustomTitle";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CloseIcon from "./CloseIcon";
import { sheet } from "../styles/components/sheet";

const AddEditTask = ({ action, isVisible, toggleVisibility, categoryEdit }) => {
  const [category, setCategory] = useState({
    category: "",
  });

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
      setCategory(categoryEdit.label || "");
    }
    if (action === "add") {
      setCategory({
        task: "",
      });
    }
  }, [categoryEdit, action]);

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
          <CustomButton type="small" text={button} />
        </View>
      </RBSheet>
    </View>
  );
};

export default AddEditTask;
