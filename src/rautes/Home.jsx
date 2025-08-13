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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isMobile = windowSize.width < 640;

  const handleClick = () => {
    navigate('/aboute');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateAvoidance = (elementX, elementY, mouseX, mouseY, strength = 200) => {
    const distance = Math.sqrt(Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2));
    const avoidanceRange = 180;

    if (distance < avoidanceRange) {
      const angle = Math.atan2(elementY - mouseY, elementX - mouseX);
      const force = Math.pow((avoidanceRange - distance) / avoidanceRange, 2);
      return {
        x: Math.cos(angle) * force * strength,
        y: Math.sin(angle) * force * strength
      };
    }
    return { x: 0, y: 0 };
  };

  const circleSizes = {
    large: isMobile ? 80 : 128,
    medium: isMobile ? 48 : 96,
    small: isMobile ? 24 : 64,
    xsmall: isMobile ? 16 : 48
  };

  const pos = {
    bottomLeft: {
      x: isMobile ? windowSize.width * 0.2 : windowSize.width * 0.1,
      y: isMobile ? windowSize.height * 0.8 : windowSize.height * 0.9
    },
    topRight: {
      x: isMobile ? windowSize.width * 0.8 : windowSize.width * 0.9,
      y: isMobile ? windowSize.height * 0.15 : windowSize.height * 0.1
    },
    center: {
      x: windowSize.width / 2,
      y: windowSize.height / 2
    },
    topLeft: {
      x: isMobile ? windowSize.width * 0.2 : windowSize.width * 0.15,
      y: isMobile ? windowSize.height * 0.2 : windowSize.height * 0.15
    },
    bottomRight: {
      x: isMobile ? windowSize.width * 0.75 : windowSize.width * 0.85,
      y: isMobile ? windowSize.height * 0.85 : windowSize.height * 0.85
    }
  };

  return (
    <div>
      <div className='relative bg-white min-h-screen md:h-[600px] overflow-hidden cursor-none'>

        {/* Maxsus sichqoncha */}
        <div
          className="fixed w-6 h-6 bg-[#4CAF50] rounded-full pointer-events-none z-50 opacity-70"
          style={{
            transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
            transition: 'transform 0.01s linear'
          }}
        />

        {/* 1 - Doira */}
        <div
          className="absolute bg-[#C8E6C9] rounded-full opacity-60 transition-all duration-500 ease-out z-20"
          style={{
            width: circleSizes.large,
            height: circleSizes.large,
            bottom: -circleSizes.large / 2 + calculateAvoidance(pos.bottomLeft.x, pos.bottomLeft.y, mousePosition.x, mousePosition.y).y,
            left: -circleSizes.large / 2 + calculateAvoidance(pos.bottomLeft.x, pos.bottomLeft.y, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />

        {/* 2 - Doira */}
        <div
          className="absolute bg-[#C8E6C9] rounded-full opacity-40 transition-all duration-500 ease-out z-20"
          style={{
            width: circleSizes.medium,
            height: circleSizes.medium,
            top: 40 + calculateAvoidance(pos.topRight.x, pos.topRight.y, mousePosition.x, mousePosition.y).y,
            right: 80 + calculateAvoidance(pos.topRight.x, pos.topRight.y, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        {/* 3 - Doira (markazdagi, faqat desktopda) */}
        {!isMobile && (
          <div
            className="absolute bg-[#C8E6C9] rounded-full opacity-70 border-4 border-[#4CAF50] transition-all duration-500 ease-out z-20"
            style={{
              width: circleSizes.medium,
              height: circleSizes.medium,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${calculateAvoidance(pos.center.x, pos.center.y, mousePosition.x, mousePosition.y).x}px, ${calculateAvoidance(pos.center.x, pos.center.y, mousePosition.x, mousePosition.y).y}px)`,
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
        )}

        {/* 4 - Doira */}
        <div
          className="absolute bg-[#C8E6C9] rounded-full opacity-60 transition-all duration-500 ease-out z-20"
          style={{
            width: circleSizes.small,
            height: circleSizes.small,
            top: 80 + calculateAvoidance(pos.topLeft.x, pos.topLeft.y, mousePosition.x, mousePosition.y).y,
            left: 80 + calculateAvoidance(pos.topLeft.x, pos.topLeft.y, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />

        {/* 5 - Doira */}
        <div
          className="absolute bg-gray-200 rounded-full opacity-50 transition-all duration-500 ease-out z-20"
          style={{
            width: circleSizes.small,
            height: circleSizes.small,
            bottom: 80 + calculateAvoidance(pos.bottomRight.x, pos.bottomRight.y, mousePosition.x, mousePosition.y).y,
            right: -30 + calculateAvoidance(pos.bottomRight.x, pos.bottomRight.y, mousePosition.x, mousePosition.y).x,
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />

        {/* Asosiy kontent */}
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

        <style>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
        `}</style>
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
