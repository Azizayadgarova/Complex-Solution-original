// src/rautes/Home.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import image from '../assets/hero.webp';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Above-the-fold komponentlarni oddiy import
import AbouteUs from '../Components/AbouteUs';

// Below-the-fold komponentlarni lazy
const OurProcess   = React.lazy(() => import('../Components/OurProcess'));
const Results      = React.lazy(() => import('../Components/Results'));
const OurService   = React.lazy(() => import('../Components/OurService'));
const Statistics   = React.lazy(() => import('../Components/Statistics'));
const Skill        = React.lazy(() => import('../Components/Skill'));
const Advantages   = React.lazy(() => import('../Components/Advantages'));
const Projects     = React.lazy(() => import('../Components/Projects'));
const GetInTuch    = React.lazy(() => import('../Components/GetInTuch'));

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Reduced motion / mobil optimizatsiya
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1200, height: typeof window !== 'undefined' ? window.innerHeight : 800 });
  const isMobile = windowSize.width < 768;

  // Dekorativ doiralarni faqat desktop + motion yoq bo‘lsa
  const enableDecor = !prefersReduced && !isMobile;

  const circlesRef = useRef([]);
  const requestRef = useRef();

  const handleClick = () => navigate('/aboute');

  const pastelColors = useMemo(() => [
    'rgba(200,200,200,0.35)',
    'rgba(230,255,230,0.35)',
    'rgba(180,230,180,0.35)',
    'rgba(220,220,220,0.35)',
  ], []);

  // resize
  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // mousemove
  useEffect(() => {
    if (!enableDecor) return;
    const onMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enableDecor]);

  // Animate circles @ ~30fps
  useEffect(() => {
    if (!enableDecor) return;
    let last = 0;
    const animate = (ts) => {
      if (ts - last < 33) { // ~30fps
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      last = ts;

      circlesRef.current.forEach((circle) => {
        if (!circle?.el) return;
        const dx = mousePosition.x - circle.x;
        const dy = mousePosition.y - circle.y;
        const distance = Math.hypot(dx, dy);
        const range = 140;

        if (distance < range) {
          const angle = Math.atan2(circle.y - mousePosition.y, circle.x - mousePosition.x);
          const force = ((range - distance) / range) ** 2;
          circle.x = Math.min(windowSize.width - circle.size, Math.max(0, circle.x + Math.cos(angle) * force * 120));
          circle.y = Math.min(windowSize.height - circle.size, Math.max(0, circle.y + Math.sin(angle) * force * 120));
        }

        circle.el.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0)`;
      });

      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [enableDecor, mousePosition, windowSize]);

  // Create circles once
  const circles = useRef(
    Array.from({ length: enableDecor ? 4 : 0 }).map(() => {
      const isLarge = Math.random() < 0.4;
      const baseSize = isLarge ? 90 : 36;
      const randomSize = isLarge ? Math.random() * 50 : Math.random() * 20;
      return {
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: baseSize + randomSize,
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        opacity: 0.35 + Math.random() * 0.25,
        el: null,
      };
    })
  ).current;

  return (
    <div className="overflow-x-hidden relative">
      {/* Floating circles (desktop only) */}
      {enableDecor && circles.map((circle, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = { ...circle, el })}
          style={{
            position: 'absolute',
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            backgroundColor: circle.color,
            opacity: circle.opacity,
            transform: `translate3d(${circle.x}px, ${circle.y}px, 0)`,
            willChange: 'transform',
            animation: 'pulse 5s ease-in-out infinite',
            zIndex: 1,
          }}
          aria-hidden
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
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

          <div className="md:w-1/2 flex justify-center relative">
            <img
              src={image}
              alt="Business growth"
              width="640"
              height="400"
              fetchpriority="high"
              decoding="async"
              className="max-w-full h-auto md:h-[400px] object-contain"
            />
          </div>
        </div>
      </div>

      <style>
        {`@keyframes pulse { 0%,100%{ transform: scale(1) } 50%{ transform: scale(1.06) } }`}
      </style>

      {/* Below-the-fold sections (lazy + Suspense) */}
      <React.Suspense fallback={null}>
        <AbouteUs />
        <OurProcess />
        <Results />
        <OurService />
        <Statistics />
        <Skill />
        <Advantages />
        <Projects limit={2} />
        <div className="text-center">
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 py-3 bg-[#1f4b73] text-white mb-6 rounded-full hover:bg-[#153655] transition"
          >
            {t("view_more")} →
          </button>
        </div>
        <GetInTuch />
      </React.Suspense>
    </div>
  );
};

export default Home;
