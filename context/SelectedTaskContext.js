import React, { createContext, useState, useContext } from "react";

const SelectedTaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState({
    priority: "Low",
    category_id: "",
    due_date: "",
    description: "",
    name: "",
  });

  const updateSelectedTask = (newTask) => {
    setSelectedTask((prevTask) => ({
      ...prevTask,
      ...newTask,
    }));
  };

  const clearSelectedTask = () => {
    setSelectedTask();
  };

  return (
    <SelectedTaskContext.Provider
      value={{ selectedTask, updateSelectedTask, clearSelectedTask }}
    >
      {children}
    </SelectedTaskContext.Provider>
  );
};

export const useSelectedTask = () => {
  return useContext(SelectedTaskContext);
};
