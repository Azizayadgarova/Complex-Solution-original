// src/Components/AdminTopbar.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import logo from '../assets/logo.webp';

const AdminNavbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAdmin();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 sm:px-[4%] bg-white shadow-sm relative">
      {/* Logo */}
      <div>
        <img className="h-14 sm:h-20 object-contain" src={logo} alt="Admin Logo" />
      </div>

      {/* Desktop menyu */}
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="w-[130px] h-[40px] bg-[#FF3E54] text-white font-medium rounded-[5px]
            hover:bg-[#E0344A] transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF3E54] focus:ring-opacity-50"
        >
          {t('goBack') || 'Orqaga'}
        </button>

        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          className="bg-white text-[#0E1F51] rounded-[5px] px-3 py-2 border border-gray-300
            focus:outline-none focus:ring-1 focus:ring-[#FF3E54] hover:shadow-sm transition duration-150 cursor-pointer"
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>

      {/* Mobile menyu tugmasi */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#0E1F51] text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-lg p-4 z-50 w-52">
          <button
            onClick={handleLogout}
            className="w-full bg-[#FF3E54] text-white px-4 py-2 rounded-md mb-3
              hover:bg-[#E0344A] transition"
          >
            {t('goBack') || 'Orqaga'}
          </button>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="w-full bg-white text-[#0E1F51] border border-gray-300 px-3 py-2 rounded-md
              focus:outline-none focus:ring-1 focus:ring-[#FF3E54]"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
