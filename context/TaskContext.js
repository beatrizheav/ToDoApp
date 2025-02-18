import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState();

  const updateTask = (newUser) => {
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
