// src/layout/AdminLayout.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("adminActive", "true");
    return () => localStorage.removeItem("adminActive");
  }, []);

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      {/* ✅ Navbar */}
      <AdminNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1">
        {/* ✅ Sidebar (responsive) */}
        <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* ✅ Content */}
        <main className="flex-1 p-4 sm:p-6 transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
