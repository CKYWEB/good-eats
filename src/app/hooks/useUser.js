"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const saveUser = (userData) => {
    setUser(userData);
  };

  const resetUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, saveUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};