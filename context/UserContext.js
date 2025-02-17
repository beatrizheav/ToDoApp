import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: "Pedro",
    email: "",
    avatar: null,
    password: "",
  });

  const updateUser = (newUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUser,
    }));
  };

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

export const useUser = () => {
  return useContext(UserContext);
};
