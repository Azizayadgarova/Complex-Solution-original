import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ➕ i18n
import fone from '../assets/img3.jpg';

const Skill = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ➕ t

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="w-full   ">
      <div
        className="relative w-full h-[700px] sm:h-[450px] md:h-[500px]  overflow-hidden"
        style={{
          backgroundImage: `url(${fone})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Orqa qorong'i overlay: qora + yashil, ammo kamroq zichlik */}
        <div className="absolute inset-0 bg-[#0B1A40] bg-opacity-40 z-0  "></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl mb-6">
            {t('skill_title_part1')}{' '}
            {/* Qizil rang aksent uchun */}
            <span className="text-[#4CAF50]">{t('skill_title_highlight')}</span>{' '}
            {t('skill_title_part2')}
          </h2>
          <button
            onClick={handleClick}
            className="bg-[#1C2D64] mt-8 sm:mt-12 hover:bg-[#2A5E91] text-white font-semibold py-4 px-10 sm:px-16 rounded-lg text-lg sm:text-xl transition-colors duration-300 shadow-lg"
          >
            {t('skill_button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
