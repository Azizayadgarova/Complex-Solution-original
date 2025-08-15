import React, { useState, useEffect } from 'react';
import image from '../assets/img.jpg';
import { useTranslation } from 'react-i18next';
import AbouteUs from '../Components/AbouteUs';
import OurProcess from '../Components/OurProcess';
import OurService from '../Components/OurService';
import Projects from '../Components/Projects';
import GetInTuch from '../Components/GetInTuch';
import Statistics from '../Components/Statistics';
import Advantages from '../Components/Advantages';
import Skill from '../Components/Skill';
import Results from '../Components/Results';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboute');
  };

  return (
    <div>
      {/* Asosiy kontent */}
      <div className="relative bg-white min-h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between px-4 sm:px-8 lg:px-16 py-12 items-center text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className='text-xl sm:text-2xl text-[#4CAF50] font-medium mb-2'>\ {t('intro')} \</p>
            <h2 className='text-4xl sm:text-5xl lg:text-[60px] text-[#2a5e91] font-medium leading-tight mb-6'>
              {t('heading')}
            </h2>
            <button
              onClick={handleClick}
              className='min-w-[160px] h-12 text-sm text-center mt-4 px-6 py-3 bg-[#4CAF50] text-white rounded-md hover:bg-[#388E3C] transition-colors duration-300'
            >
              {t('view_more')}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center relative z-10">
            <img src={image} alt="Business growth" className="max-w-full h-auto md:h-[400px]" />
          </div>
        </div>
      </div>

      {/* Lower Sections */}
      <AbouteUs />
      <OurProcess />
      <Results />
      <OurService />
      <Statistics />
      <Skill />
      <Advantages />
      <Projects />
      <GetInTuch />
    </div>
  );
};

export default Home;
