import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState({
    priority: "Low",
    category_id: "",
    due_date: "",
    description: "",
    name: "",
  });

  const updateTask = (newTask) => {
    setTask((prevTask) => ({
      ...prevTask,
      ...newTask,
    }));
  };

  const clearTask = () => {
    setTask();
  };

  return (
    <TaskContext.Provider value={{ task, updateTask, clearTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
