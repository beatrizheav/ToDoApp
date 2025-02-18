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
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";
import { useTask } from "../context/TaskContext";

const AddEditTask = ({ action, isVisible, toggleVisibility }) => {
  const { task } = useTask();
  const [taskDetails, setTaskDetails] = useState({
    task: "",
    description: "",
    date: new Date(),
    category: "",
    priority: "",
  });
  const title = action === "add" ? "Add task" : "Edit task";
  const button = action === "add" ? "Add" : "Save";

  const { user } = useUser();

  const refRBSheet = useRef();

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

  useEffect(() => {
    if (action === "edit" && task) {
      setTaskDetails({
        task: task.name || "",
        description: task.description || "",
        date: new Date(task.due_date) || new Date(),
        category: task.category_id || "",
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

  const handleTask = async () => {
    const empty = Object.values(taskDetails).some(
      (value) => value === "" || value === null
    );
    if (empty) {
      alert("Some inputs are empty or invalid.");
      return;
    }

    const payload = {
      name: taskDetails.task,
      category_id: taskDetails.category,
      description: taskDetails.description,
      due_date: taskDetails.date.toISOString().split("T")[0],
      priority: taskDetails.priority,
      ...(action === "add" ? { user_id: user.id } : { taskId: task.id }),
    };

    const endpoint = action === "add" ? "/tasks/createTask" : "/tasks/editTask";
    const axiosMethod =
      action === "add" ? axiosInstance.post : axiosInstance.put;

    try {
      await axiosMethod(endpoint, payload);
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
          <CustomButton
            type="small"
            text={button}
            onPress={() => handleTask()}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default AddEditTask;
