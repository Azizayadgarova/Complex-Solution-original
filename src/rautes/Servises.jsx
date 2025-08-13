import React, { useMemo } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import search from '../assets/iguald.webp';
import {
  FaTools, FaFileAlt, FaLaptopCode, FaChartLine, FaProjectDiagram
} from 'react-icons/fa';
import OurProcess from '../Components/OurProcess';

const Servises = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const serviceTabs = useMemo(() => [
    { path: '', label: t('tech_support'), icon: <FaTools /> },
    { path: 'one', label: t('documentation'), icon: <FaFileAlt /> },
    { path: 'two', label: t('software_solutions'), icon: <FaLaptopCode /> },
    { path: 'three', label: t('consulting'), icon: <FaChartLine /> },
    { path: 'four', label: t('it_projects'), icon: <FaProjectDiagram /> },
  ], [t]);

  return (
    <div className="bg-white min-h-screen">
      {/* ✅ Header */}
      <div
        className="relative py-[100px] sm:py-[140px] lg:py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${search})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Matn */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2">{t('our_services')}</h1>
          <p className="text-sm sm:text-lg lg:text-[20px] font-bold text-white">
            {t('home')} / {t('services')}
          </p>
        </div>
      </div>

      {/* ✅ Xizmat Tab Buttonlar */}
      <div className="flex justify-center my-6 sm:my-8 px-4 sm:px-[4%] flex-wrap gap-2 sm:gap-3">
        {serviceTabs.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) =>
              `flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-[16px] font-semibold rounded-full border 
              transition duration-300 ease-in-out
              ${isActive
                ? 'bg-gradient-to-r from-[#4CAF50] to-[#0066CC] text-white shadow-md'
                : ' text-[#2a5e91] hover:border-[#0066CC] hover:text-[#2a5e91]'}`}
          >
            <span className="text-base sm:text-[18px]">{icon}</span>
            <span className="truncate">{label}</span>
          </NavLink>
        ))}
      </div>

      {/* ✅ Kontent */}
      <div className="px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>

      {/* OurProcess bo‘limi */}
      <OurProcess />

      {/* ✅ Orqaga tugmasi */}
      <div className="flex justify-center my-8 sm:my-10 px-4">
        <button
          onClick={() => navigate('/')}
          className="bg-[#2a5e91] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-[16px] font-semibold shadow-md hover:bg-[#3b74a6] transition-transform hover:scale-105"
        >
          ← {t('back_to_home')}
        </button>
      </div>
    </div>
  );
};

export default Servises;
