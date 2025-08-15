import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  FaPlayCircle,
  FaCog,
  FaCloud,
  FaShieldAlt,
  FaBoxOpen,
} from 'react-icons/fa';

const data = [
  { number: 50, titleKey: 'stats.projects', icon: <FaCog size={24} />, cardBg: 'bg-[#2A5E91]' },
  { number: 8, titleKey: 'stats.services', icon: <FaCloud size={24} />, cardBg: 'bg-white' },
  { number: 100, titleKey: 'stats.reviews', icon: <FaShieldAlt size={24} />, cardBg: 'bg-white' },
  { number: 15, titleKey: 'stats.partners', icon: <FaBoxOpen size={24} />, cardBg: 'bg-[#2A5E91]' },
];

const Statistics = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="bg-[#F7F7F7] py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        
        {/* Chap tomon */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xs sm:text-sm font-semibold text-[#43A047] uppercase mb-2">
            /{t('services')}/
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#2A5E91] leading-snug mb-4">
            Complex Solution
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6 sm:mb-8">
            {t('statistic')}
          </p>

          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-3 
                       bg-white border border-gray-700 text-gray-600 rounded-full 
                       font-medium hover:bg-[#0066CC] hover:text-white 
                       transition-colors duration-300 shadow-md mx-auto lg:mx-0"
          >
            <FaPlayCircle size={18} className="sm:size-[20px]" />
            {t('view_more')}
          </button>
        </div>

        {/* O'ng tomon */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
          {data.map((item, index) => {
            const isWhiteCard = item.cardBg === 'bg-white';
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
                className={`${item.cardBg} rounded-xl p-5 sm:p-6 shadow-lg 
                            flex flex-col items-start text-left
                            hover:shadow-xl hover:-translate-y-1 
                            transform transition-all duration-300`}
              >
                <div className="mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      isWhiteCard ? 'bg-[#4CAF50]' : 'bg-white bg-opacity-20'
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: isWhiteCard ? 'text-white' : 'text-white',
                    })}
                  </div>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{ color: isWhiteCard ? '#333333' : 'white' }}
                >
                  {inView && <CountUp end={item.number} duration={2} />}+
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed font-medium"
                  style={{ color: isWhiteCard ? '#555555' : 'white' }}
                >
                  {t(item.titleKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
