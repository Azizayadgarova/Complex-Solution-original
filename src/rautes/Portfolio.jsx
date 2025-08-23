import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import img from '../assets/portfoliopage.jpg';
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
        className="relative py-[100px] sm:py-[140px] md:py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
            {t('portfolio')}
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-bold text-white">
            {t('home')} / {t('portfolio')}
          </p>
        </div>
      </div>

      {/* Experience Title */}
      <div className="flex flex-col items-center mb-12 mt-12 sm:mt-24 px-4 text-center">
        <h2 className="text-[#2a5e91] text-2xl sm:text-3xl md:text-4xl font-medium">
          {t('experience')}
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-[50px] sm:mb-[80px] gap-3 sm:gap-4 px-[4%] py-5 bg-gray-100">
        {tabs.map(({ path, labelKey, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === ''}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300
              ${isActive
                ? 'bg-[#2a5e91] text-white shadow-md'
                : 'bg-white text-[#1f4b73] hover:bg-gray-200'}`
            }
          >
            <span className="text-lg sm:text-xl">{icon}</span>
            {t(labelKey)}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Portfolio;
