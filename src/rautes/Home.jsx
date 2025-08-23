import React, { useState, useEffect, useRef } from 'react';
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
  const circlesRef = useRef([]);
  const requestRef = useRef();

  const handleClick = () => {
    navigate('/aboute');
  };

  // Floating circles initial setup
  const circleCount = isMobile ? 3 : 6;
  const pastelColors = [
    'rgba(200,200,200,0.4)',
    'rgba(230,255,230,0.4)',
    'rgba(180,230,180,0.4)',
    'rgba(220,220,220,0.4)',
  ];

  useEffect(() => {
    // resize listener
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // mousemove listener
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate circles (no React state updates!)
    const animate = () => {
      circlesRef.current.forEach((circle) => {
        if (!circle.el) return;

        const dx = mousePosition.x - circle.x;
        const dy = mousePosition.y - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const avoidanceRange = 150;

        if (distance < avoidanceRange) {
          const angle = Math.atan2(circle.y - mousePosition.y, circle.x - mousePosition.x);
          const force = Math.pow((avoidanceRange - distance) / avoidanceRange, 2);
          circle.x = Math.min(
            windowSize.width - circle.size,
            Math.max(0, circle.x + Math.cos(angle) * force * 150)
          );
          circle.y = Math.min(
            windowSize.height - circle.size,
            Math.max(0, circle.y + Math.sin(angle) * force * 150)
          );
        }

        // apply to DOM directly
        circle.el.style.left = `${circle.x}px`;
        circle.el.style.top = `${circle.y}px`;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition, windowSize]);

  // Create circles only once
  const circles = useRef(
    Array.from({ length: circleCount }).map(() => {
      const isLarge = Math.random() < 0.4;
      const baseSize = isMobile ? (isLarge ? 60 : 20) : (isLarge ? 100 : 40);
      const randomSize = isMobile
        ? isLarge
          ? Math.random() * 40
          : Math.random() * 20
        : isLarge
        ? Math.random() * 60
        : Math.random() * 30;

      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: baseSize + randomSize,
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        opacity: 0.4 + Math.random() * 0.3,
        el: null,
      };
    })
  ).current;

  return (
    <div className="overflow-x-hidden relative">
      {/* Floating circles */}
      {circles.map((circle, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = { ...circle, el })}
          style={{
            position: 'absolute',
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            borderRadius: '50%',
            backgroundColor: circle.color,
            opacity: circle.opacity,
            transform: 'translateZ(0)',
            animation: 'pulse 4s ease-in-out infinite',
            zIndex: 40,
          }}
        />
      ))}

      {/* Custom cursor */}
      <div
        className="fixed w-6 h-6 bg-[#4CAF50] rounded-full pointer-events-none z-50 opacity-70"
        style={{
          transform: `translate3d(${mousePosition.x - 12}px, ${mousePosition.y - 12}px, 0)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-20 min-h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-xl sm:text-2xl text-[#4CAF50] font-medium mb-2">
              \ {t('intro')} \
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] text-[#2a5e91] font-medium leading-tight mb-6">
              {t('heading')}
            </h2>
            <button
              onClick={handleClick}
              className="min-w-[160px] h-12 text-sm px-6 py-3 bg-[#4CAF50] text-white rounded-md hover:bg-[#388E3C] transition-colors duration-300"
            >
              {t('view_more')}
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center relative z-10">
            <img src={image} alt="Business growth" className="max-w-full h-auto md:h-[400px]" />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}
      </style>

      {/* Additional components */}
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
