import React, { createContext, useContext, useState } from "react";

// 1️⃣ Context yaratamiz
const AuthContext = createContext();

// 2️⃣ Provider komponent
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useAuth = () => useContext(AuthContext);
