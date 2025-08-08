import React from 'react';
import { useTranslation } from 'react-i18next';
import comony from '../assets/photo.jpg';
import strelka from '../assets/Strelka.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AbouteUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboute');
  };

  return (
    <div className="bg-white px-[4%] py-14 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Rasm qismi */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex justify-center md:justify-start">
          <img
            className="rounded-[20px] max-w-full sm:max-w-[350px] md:max-w-[500px] lg:h-[500px] h-auto object-contain"
            src={comony}
            alt="About us illustration"
          />
        </div>

        {/* Matn qismi */}
        <div className="w-full md:w-1/2 lg:w-[55%] text-center md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#4CAF50] font-medium mb-2">
            \ {t('label')} \
          </p>

          <h2 className="text-[30px] sm:text-4xl md:text-[46px] text-[#2a5e91] font-medium mt-6 mb-6">
            {t('title')}
          </h2>

          <p className="text-base sm:text-lg lg:text-[20px] text-gray-700 leading-relaxed mb-6">
            {t('description')}
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <button
              onClick={handleClick}
              className="w-36 h-12 sm:w-40 sm:h-14 px-6 font-medium bg-[#4CAF50] text-white rounded-md hover:bg-[#388E3C] transition-colors duration-300 shadow-md"
            >
              {t('button')}
            </button>

            {/* Strelka (faqat md+ ekranlarda) */}
            <motion.img
              src={strelka}
              alt="strelka"
              className="hidden md:block w-[80px] h-[100px] lg:w-[140px] lg:h-[150px]"
              animate={{ x: [0, 20, 0, -40, 0], y: [0, -5, 0, 5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbouteUs;
