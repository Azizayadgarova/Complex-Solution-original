import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaClipboardList, FaCogs, FaVial } from 'react-icons/fa';

const steps = [
  { key: 'research', number: 1, icon: <FaSearch className="text-white" size={20} /> },
  { key: 'planning', number: 2, icon: <FaClipboardList className="text-white" size={20} /> },
  { key: 'execution', number: 3, icon: <FaCogs className="text-white" size={20} /> },
  { key: 'testing', number: 4, icon: <FaVial className="text-white" size={20} /> },
];

const VerticalStep = ({ step, title, description, isLastStep }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const inView = useInView(ref, {
    once: false,
    amount: 0.2,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile Layout
  if (isMobile) {
    return (
      <div ref={ref} className="relative mb-12 last:mb-0">
        <div className="flex items-start gap-4">
          {/* Icon and line */}
          <div className="flex flex-col items-center flex-shrink-0">
            <motion.div
              className="rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
              initial={false}
              animate={{
                background: inView
                  ? 'linear-gradient(45deg, #4CAF50, #0066CC)'
                  : '#d1d5db',
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center">
                {React.cloneElement(step.icon, { size: 18 })}
              </div>
            </motion.div>
            
            {/* Vertical line for mobile */}
            {!isLastStep && (
              <div className="w-0.5 mt-2 relative" style={{ height: '60px' }}>
                <motion.div
                  className="w-full bg-gray-300 absolute inset-0"
                  initial={{ height: 0 }}
                  animate={inView ? { height: '100%' } : { height: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4CAF50] to-[#0066CC]"
                  initial={{ height: 0 }}
                  animate={inView ? { height: '100%' } : { height: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: step.number * 0.1 }}
            className="flex-1 pt-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3
                className="text-2xl sm:text-3xl font-bold transition-colors duration-300"
                style={{
                  background: inView ? 'linear-gradient(to right, #4CAF50, #0066CC)' : 'none',
                  WebkitBackgroundClip: inView ? 'text' : 'unset',
                  WebkitTextFillColor: inView ? 'transparent' : 'inherit',
                  color: inView ? 'transparent' : '#d1d5db'
                }}
              >
                0{step.number}
              </h3>
              <h4
                className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                  inView ? 'text-[#333333]' : 'text-gray-600'
                }`}
              >
                {title}
              </h4>
            </div>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div ref={ref} className="relative pb-24 lg:pb-32 last:pb-0">
      {/* Icon */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10 rounded-full shadow-lg w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
        initial={false}
        animate={{
          background: inView
            ? 'linear-gradient(45deg, #4CAF50, #0066CC)'
            : '#d1d5db',
        }}
        transition={{ duration: 1.2 }}
      >
        <div className="rounded-full w-full h-full flex items-center justify-center">
          {React.cloneElement(step.icon, { 
            size: window.innerWidth >= 1280 ? 28 : window.innerWidth >= 1024 ? 24 : 20 
          })}
        </div>
      </motion.div>

      {/* Vertical line */}
      {!isLastStep && (
        <div className="absolute left-1/2 -translate-x-1/2 z-0" style={{ 
          top: '48px', 
          height: 'calc(100% - 48px)', 
          width: '2px' 
        }}>
          <motion.div
            className="w-full bg-gray-300"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4CAF50] to-[#0066CC]"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-12 xl:gap-x-16 items-center pt-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: step.number * 0.1 }}
          className="text-right pr-4 lg:pr-8"
        >
          <div className="flex items-center justify-end flex-wrap lg:flex-nowrap gap-2 lg:gap-4">
            <h3
              className="text-3xl lg:text-4xl xl:text-6xl font-bold transition-colors duration-300"
              style={{
                background: inView ? 'linear-gradient(to right, #4CAF50, #0066CC)' : 'none',
                WebkitBackgroundClip: inView ? 'text' : 'unset',
                WebkitTextFillColor: inView ? 'transparent' : 'inherit',
                color: inView ? 'transparent' : '#d1d5db'
              }}
            >
              0{step.number}
            </h3>
            <h4
              className={`text-xl lg:text-2xl xl:text-3xl font-semibold transition-colors duration-300 ${
                inView ? 'text-[#333333]' : 'text-gray-600'
              }`}
            >
              {title}
            </h4>
          </div>
        </motion.div>

        {/* Center spacer for icon */}
        <div className="w-12 lg:w-16 xl:w-20"></div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: step.number * 0.1 }}
          className="text-left pl-4 lg:pl-8"
        >
          <p className="text-base lg:text-lg xl:text-xl text-[#555555] leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const OurProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <p className="text-sm sm:text-base uppercase text-[#3b74a6] font-semibold tracking-wider mb-2 md:mb-4">
            {t('ourprocess.tagline')}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#333333] leading-tight">
            {t('ourprocess.title')}
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <VerticalStep
              key={step.key}
              step={step}
              title={t(`ourprocess.${step.key}.title`)}
              description={t(`ourprocess.${step.key}.description`)}
              isLastStep={index === steps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .grid-cols-\\[1fr_auto_1fr\\] {
            display: block;
          }
        }
        
        /* Smooth animations for reduced motion users */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurProcess;