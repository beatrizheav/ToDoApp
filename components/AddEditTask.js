import React, { useRef, useState, useEffect } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomTitle from "./CustomTitle";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CloseIcon from "./CloseIcon";
import InputDatePicker from "./InputDatePicker";
import DropdownInput from "./DropdownInput";
import { addEditTask } from "../styles/components/add-edit-task";

const AddEditTask = ({ action, isVisible, toggleVisibility }) => {
  const [taskDetails, setTaskDetails] = useState({
    task: "",
    description: "",
    date: new Date(),
    category: "",
    priority: "",
  });

  const refRBSheet = useRef();

  const title = action === "add" ? "Add task" : "Edit task";
  const button = action === "add" ? "Add" : "Edit";

  const handleInputChange = (field, value) => {
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (isVisible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [isVisible]);

  return (
    <View style={addEditTask.container}>
      <RBSheet
        closeOnPressMask={false}
        ref={refRBSheet}
        customStyles={addEditTask.sheetStyles}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
      >
        <View>
          <View style={addEditTask.header}>
            <CustomTitle text={title} />
            <CloseIcon onPress={toggleVisibility} />
          </View>
          <CustomInput
            label="Task"
            placeholder="What do you need to do"
            value={taskDetails.task}
            onChangeValue={(value) => handleInputChange("task", value)}
            type="text"
          />
          <CustomInput
            label="Description"
            placeholder="Description"
            value={taskDetails.description}
            onChangeValue={(value) => handleInputChange("description", value)}
            type="paragraph"
          />

          <InputDatePicker
            label="Due Date"
            date={taskDetails.date}
            setDate={(value) => handleInputChange("date", value)}
          />
          <DropdownInput
            label="Category"
            type="category"
            value={taskDetails.category}
            onChange={(value) => handleInputChange("category", value)}
            placeholder="Choose the category"
          />
          <DropdownInput
            label="Priority"
            type="priority"
            value={taskDetails.priority}
            onChange={(value) => handleInputChange("priority", value)}
            placeholder="Choose the priority"
          />
        </View>
        <View style={addEditTask.footer}>
          <CustomButton type="small" text={button} />
        </View>
      </RBSheet>
    </View>
  );
};

export default AddEditTask;
