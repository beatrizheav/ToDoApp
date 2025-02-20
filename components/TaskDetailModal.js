import React, { useState, useEffect } from "react";
import { Modal, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import CloseIcon from "./CloseIcon";
import CustomTitle from "./CustomTitle";
import CustomIcon from "./CustomIcon";
import axiosInstance from "../api/axiosInstance";
import { useSelectedTask } from "../context/SelectedTaskContext";
import { getPriorityColor } from "../hooks/getPriorityColor";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { taskDetail } from "../styles/components/task-detail-modal";

const TaskDetailModal = ({ visible, setVisible, onPress }) => {
  const { selectedTask } = useSelectedTask();

  const [category, setCategory] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const priorityColor = getPriorityColor(selectedTask.priority);

  // Check if a due date exists, converts it to a valid Date object, and formats it as YYYY-MM-DD
  useEffect(() => {
    if (selectedTask?.due_date) {
      setDueDate(new Date(selectedTask.due_date).toISOString().split("T")[0]);
    }
  }, [selectedTask]);

  // Get the name category based on the id
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axiosInstance.get("/categories/category", {
          params: { id: selectedTask.category_id },
        });
        setCategory(data.name);
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchCategory();
  }, [selectedTask.category_id]);

  const handleClose = () => setVisible(false);

  const onPressEdit = () => {
    onPress();
    handleClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={taskDetail.overlay}>
        <View style={taskDetail.modalContainer}>
          <View style={taskDetail.header}>
            <View style={taskDetail.textHeader}>
              <CustomTitle text={selectedTask.name} type={"small"} />
            </View>
            <CloseIcon onPress={handleClose} />
          </View>

          <View style={taskDetail.detailsItem}>
            <Text style={fontsTheme.regular}>{selectedTask.description}</Text>
          </View>

          <View style={taskDetail.detailsItem}>
            <Fontisto
              name="date"
              size={20}
              color={colorsTheme.darkBlue}
              style={taskDetail.iconsMargin}
            />
            <Text style={fontsTheme.regular}>Date: {dueDate}</Text>
          </View>
          <View style={taskDetail.detailsItem}>
            <View
              style={[
                taskDetail.priorityCircle,
                priorityColor,
                taskDetail.iconsMargin,
              ]}
            />
            <Text style={fontsTheme.regular}>
              Priority: {selectedTask.priority}
            </Text>
          </View>
          <View style={taskDetail.detailsItem}>
            <Ionicons
              name="layers-outline"
              size={24}
              color={colorsTheme.darkBlue}
              style={taskDetail.iconsMargin}
            />
            <Text style={fontsTheme.regular}>Category: {category}</Text>
          </View>
          <View style={taskDetail.editIcon}>
            <CustomIcon
              name="edit"
              iconColor="black"
              onPress={() => onPressEdit()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskDetailModal;
