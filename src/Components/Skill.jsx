import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fone from '../assets/img3.jpg';

const Skill = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[500px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[700px] overflow-hidden"
        style={{
          backgroundImage: `url(${fone})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1A40] bg-opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight max-w-4xl mb-4 sm:mb-6">
            {t('skill_title_part1')}{' '}
            <span className="text-[#4CAF50]">{t('skill_title_highlight')}</span>{' '}
            {t('skill_title_part2')}
          </h2>
          <button
            onClick={handleClick}
            className="bg-[#1C2D64] mt-6 sm:mt-8 md:mt-10 hover:bg-[#2A5E91] text-white font-semibold py-3 px-8 sm:py-4 sm:px-12 md:px-14 lg:px-16 rounded-lg text-base sm:text-lg md:text-xl transition-colors duration-300 shadow-lg"
          >
            {t('skill_button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
