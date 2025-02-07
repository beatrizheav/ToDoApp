import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { containers } from "../styles/containers";
import HorizontalCalendar from "../components/HorizontalCalendar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";
import TaskDetailModal from "../components/TaskDetailModal";
import TaskList from "../components/TaskList";
import AddEditTask from "../components/AddEditTask";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [detailTaskVisible, setDetailTaskVisible] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [task, setTask] = useState("");
  const [action, setAction] = useState("edit");

  const toggleSheetVisibility = () => {
    setIsSheetVisible((prevState) => !prevState);
  };

  const handleEditTask = () => {
    toggleSheetVisibility();
    setAction("edit");
  };

  const [apiResponse, setApiResponse] = useState("");

  const pruebaApiData = {
    date: "2025-02-20",
    user: 1,
  };

  const { user, updateUser, clearUser } = useUser();
  console.error(user);

  const handleTasks = async () => {
    try {
      const response = await axiosInstance.get("/tasks/userTasks", {
        params: pruebaApiData,
      });
      setApiResponse(response);
      console.log("RESPONSE:", response.data);
    } catch (error) {
      if (error.response) {
        // If the error has a response, it usually means the request reached the server
        const errorMessage =
          error.response.data.message ||
          "Something went wrong while processing your request.";
        alert(errorMessage);
      } else if (error.request) {
        // If the error doesn't have a response, it means the request was made but no response was received
        console.error("Request error:", error.request);
        alert("Error: No response from the server.");
      } else {
        // This part handles any other type of error (e.g., error setting up the request)
        console.error("Error message:", error.message);
        alert("Error: An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    handleTasks(); // Ejecuta la función al cargar la página
  }, []); // El arreglo vacío [] asegura que solo se ejecute una vez al cargar el componente

  return (
    <View style={containers.safeArea}>
      <HorizontalCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <GestureHandlerRootView>
        <TaskList
          date={selectedDate.toISOString().slice(0, 10)}
          setModalVisible={setDetailTaskVisible}
          onPressEdit={handleEditTask}
          setTask={setTask}
        />
      </GestureHandlerRootView>
      {isSheetVisible && (
        <AddEditTask
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheetVisibility}
          action={action}
          task={task}
        />
      )}
      <NavBar toggleSheet={toggleSheetVisibility} setAction={setAction} />
      <TaskDetailModal
        task={task}
        visible={detailTaskVisible}
        setVisible={setDetailTaskVisible}
        onPress={handleEditTask}
        setTask={setTask}
      />
    </View>
  );
};

export default Main;
