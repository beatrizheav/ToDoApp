import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomTitle from "./CustomTitle";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CloseIcon from "./CloseIcon";
import InputDatePicker from "./InputDatePicker";
import DropdownInput from "./DropdownInput";
import { sheet } from "../styles/components/sheet";

const AddEditTask = ({ action, isVisible, toggleVisibility, task }) => {
  const [taskDetails, setTaskDetails] = useState({
    task: "",
    description: "",
    date: new Date(),
    category: "",
    priority: "",
  });

  const refRBSheet = useRef();

  const title = action === "add" ? "Add task" : "Edit task";
  const button = action === "add" ? "Add" : "Save";

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

  console.log(task);

  // Set the task details when the action is "edit" and task changes
  useEffect(() => {
    if (action === "edit" && task) {
      setTaskDetails({
        task: task.name || "",
        description: task.description || "",
        date: new Date(task.dueDate) || new Date(),
        category: task.category || "",
        priority: task.priority || "",
      });
    }
    if (action === "add") {
      setTaskDetails({
        task: "",
        description: "",
        date: new Date(),
        category: "",
        priority: "",
      });
    }
  }, [task, action]);

  return (
    <View style={sheet.container}>
      <RBSheet
        closeOnPressMask={false}
        ref={refRBSheet}
        customStyles={{
          container: {
            ...sheet.sheetStyles,
            ...sheet.sheetTask,
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

          {/* Task Input Fields */}
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

        <View style={sheet.footer}>
          <CustomButton type="small" text={button} />
        </View>
      </RBSheet>
    </View>
  );
};

export default AddEditTask;
