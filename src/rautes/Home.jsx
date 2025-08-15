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

  const calculateAvoidance = (elementX, elementY, mouseX, mouseY, strength = 150) => {
    const distance = Math.sqrt(Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2));
    const avoidanceRange = 150;

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

  // 🎨 Pastel ranglar
  const pastelColors = [
    'rgba(200, 200, 200, 0.4)',
    'rgba(230, 255, 230, 0.4)',
    'rgba(180, 230, 180, 0.4)',
    'rgba(220, 220, 220, 0.4)'
  ];

  // 🔵 Sharchalar soni
  const circleCount = 6;

  // 🆕 Yangilangan sharcha generator
  const circles = Array.from({ length: circleCount }).map(() => {
    const isLarge = Math.random() < 0.4; // 40% katta bo'ladi
    const baseSize = isMobile ? (isLarge ? 60 : 20) : (isLarge ? 100 : 40);
    const randomSize = isMobile
      ? (isLarge ? Math.random() * 40 : Math.random() * 20)
      : (isLarge ? Math.random() * 60 : Math.random() * 30);

    return {
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      size: baseSize + randomSize,
      color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
      opacity: 0.4 + Math.random() * 0.3
    };
  });

  return (
    <div className="overflow-x-hidden relative">
      {/* Floating circles */}
      {circles.map((circle, index) => {
        const avoidance = calculateAvoidance(circle.x, circle.y, mousePosition.x, mousePosition.y);
        const left = Math.min(windowSize.width - circle.size, Math.max(0, circle.x + avoidance.x));
        const top = Math.min(windowSize.height - circle.size, Math.max(0, circle.y + avoidance.y));

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: circle.size,
              height: circle.size,
              left,
              top,
              borderRadius: '50%',
              backgroundColor: circle.color,
              opacity: circle.opacity,
              transition: 'all 0.5s ease-out',
              animation: `pulse ${3 + Math.random() * 3}s ease-in-out infinite`,
              zIndex: 40
            }}
          />
        );
      })}

      {/* Maxsus sichqoncha */}
      <div
        className="fixed w-6 h-6 bg-[#4CAF50] rounded-full pointer-events-none z-50 opacity-70"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
          transition: 'transform 0.01s linear'
        }}
      />

      {/* Asosiy kontent */}
      <div className='relative bg-white min-h-screen md:h-[600px] w-full overflow-hidden'>
        <div className="relative z-20 flex flex-col md:flex-row justify-between px-4 sm:px-8 lg:px-16 py-12 items-center text-center md:text-left">
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
            <img src={image} alt="Business growth" className="max-w-full h-auto md:h-[400px] relative z-10" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Qo'shimcha komponentlar */}
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
