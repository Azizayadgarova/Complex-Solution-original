import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import img from '../assets/portfoliopage.jpg'; // Tasvir import qilindi
import {
  FaList,
  FaNetworkWired,
  FaHospital,
  FaSeedling,
  FaServer,
  FaBook,
  FaBriefcase,
} from 'react-icons/fa';

const Portfolio = () => {
  const { t } = useTranslation();
  const tabs = [
    { path: '', labelKey: 'all', icon: <FaList /> },
    { path: 'portfoliolife', labelKey: 'life', icon: <FaNetworkWired /> },
    { path: 'portfoliomoments', labelKey: 'moments', icon: <FaHospital /> },
    { path: 'portfolionature', labelKey: 'nature', icon: <FaSeedling /> },
    { path: 'portfoliotravel', labelKey: 'travel', icon: <FaServer /> },
    { path: 'portfolioeducation', labelKey: 'education', icon: <FaBook /> },
    { path: 'portfoliosector', labelKey: 'sector', icon: <FaBriefcase /> },
  ];

  return (
    <div className="bg-white mb-[100px]">
      {/* Header with Background Image */}
      <div
        className="relative py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-2">{t('portfolio')}</h1>
          <p className="text-[20px] font-bold text-white">
            {t('home')} / {t('portfolio')}
          </p>
        </div>
      </div>

      {/* Experience Title */}
      <div className="flex flex-col items-center mb-12 mt-24 px-4">
        <h2 className="text-[#0E1F51] text-3xl md:text-4xl font-medium">{t('experience')}</h2>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4 md:px-16">
        {tabs.map(({ path, labelKey, icon }, index) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) =>
              `group relative inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium border border-transparent rounded-full transition-all duration-300
              ${
                isActive
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:text-[#FF3E54] hover:border-[#FF3E54]'
              }
              ${index === 0 ? 'rounded-l-full' : ''}
              ${index === tabs.length - 1 ? 'rounded-r-full' : ''}
              ${index > 0 ? '-ml-px' : ''}
              `
            }
          >
            <span className="transition-transform group-hover:-translate-y-1 group-hover:scale-105">
              {icon}
            </span>
            <span className="relative z-10">{t(labelKey)}</span>

            {/* Shine effect */}
            <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 group-hover:animate-shine"></span>
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Portfolio;