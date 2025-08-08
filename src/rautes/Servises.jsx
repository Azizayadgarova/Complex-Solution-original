import React, { useMemo } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import search from '../assets/iguald.webp'
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
      {/* Header */}
      <div
        className="relative py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${search})` }}
      >
        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* ✅ Matn (overlay ustida bo'lishi uchun z-10) */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-2">{t('our_services')}</h1>
          <p className="text-[20px] font-bold text-white">
            {t('home')} / {t('services')}
          </p>
        </div>
      </div>

      {/* Xizmat Tab Buttonlar */}
      <div className="flex justify-center my-8 px-[4%] flex-wrap gap-3">
        {Array.isArray(serviceTabs) && serviceTabs.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-3 text-[16px] font-semibold rounded-full border 
              transition duration-300 ease-in-out
              ${isActive
                ? 'bg-gradient-to-r from-[#4CAF50]  to-[#0066CC] text-white shadow-md'
                : ' text-[#2a5e91] hover:border-[#0066CC] hover:text-[#2a5e91]'}`}
          >
            <span className="text-[18px]">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      <Outlet />
      <OurProcess />

      {/* Orqaga tugmasi */}
      <div className="flex justify-center my-10">
         <button
          onClick={() => navigate('/')}
          className="bg-[#2a5e91] text-white px-8 py-3 rounded-full text-[16px] font-semibold shadow-md hover:bg-[#3b74a6] transition-transform hover:scale-105"
        >
          ← {t('back_to_home')}
        </button>
      </div>
    </div>
  );
};

export default Servises;
