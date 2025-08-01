import React, { useMemo } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
      <div className="bg-[#0E1F51] py-16 text-center">
        <h1 className="text-[#FF3E54] text-[48px] font-bold mb-2">{t('our_services')}</h1>
        <p className="text-white text-[18px]">{t('home')} / {t('services')}</p>
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
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md'
                : ' text-[#0E1F51] hover:border-[#FF3E54] hover:text-[#FF3E54]'}` }
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
          className='bg-[#FF3E54] text-white px-8 py-3 rounded-full text-[16px] font-semibold shadow-md hover:bg-[#e62b42] transition-transform hover:scale-105'
        >
          ← {t('back_to_home')}
        </button>
      </div>
    </div>
  );
};

export default Servises;
