// context/UserContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: "Pedro",
    email: "",
    avatar: null,
    password: "",
  });

  // Function to update user info
  const updateUser = (newUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUser, // Update only the properties passed in
    }));
  };

  // Function to clear user info (for logout or reset)
  const clearUser = () => {
    setUser({
      id: null,
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};
