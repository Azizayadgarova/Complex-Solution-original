// src/Components/AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const AdminSidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Mobil overlay fon */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed sm:static top-0 left-0 h-full sm:h-auto w-64 bg-white shadow-lg sm:shadow-none p-4 transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
      >
        {/* Mobilda yopish tugmasi */}
        <div className="flex justify-between items-center mb-4 sm:hidden">
          <h2 className="text-lg font-semibold text-[#0E1F51]">Menyu</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-200">
            <X size={20} />
          </button>
        </div>

        {/* Navigatsiya */}
        <nav className="flex flex-col gap-3">
          <NavLink
            to="/main/projects"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-[#0E1F51] text-white"
                  : "text-[#0E1F51] hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            Loyihalar
          </NavLink>
          <NavLink
            to="/main/contacts"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-[#0E1F51] text-white"
                  : "text-[#0E1F51] hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            Bog‘lanish
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
