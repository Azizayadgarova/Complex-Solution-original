import React, { createContext, useContext, useEffect, useState } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('adminUser');
    if (saved) {
      setAdmin(JSON.parse(saved));
    }
  }, []);

  const login = (adminData) => {
    setAdmin(adminData);
    localStorage.setItem('adminUser', JSON.stringify(adminData));
    localStorage.setItem('adminActive', 'true');
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('adminUser');
    localStorage.removeItem('adminActive');
    localStorage.removeItem('username');
  };

  return (
    <AdminContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
