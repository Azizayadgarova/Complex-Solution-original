// src/layout/AdminLayout.jsx

import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


import AdminComponent from '../Components/AdminComponent';
import AdminNavbar from '../Components/AdminNavbar';

const AdminLayout = () => {
  useEffect(() => {
    localStorage.setItem('adminActive', 'true');
    return () => localStorage.removeItem('adminActive');
  }, []);

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <AdminNavbar/> {/* ✅ Ajratilgan Topbar */}
      <div className="px-4 sm:px-[4%] py-2">
        <AdminComponent/>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
