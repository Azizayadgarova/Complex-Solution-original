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
  {
    number: 250,
    titleKey: 'stats.projects',
    icon: <FaCog size={24} />,
    cardBg: 'bg-[#2A5E91]', // To'qroq ko'k fon
  },
  {
    number: 20,
    titleKey: 'stats.services',
    icon: <FaCloud size={24} />,
    cardBg: 'bg-white', // Oq fon
  },
  {
    number: 150,
    titleKey: 'stats.reviews',
    icon: <FaShieldAlt size={24} />,
    cardBg: 'bg-white', // Oq fon
  },
  {
    number: 15,
    titleKey: 'stats.partners',
    icon: <FaBoxOpen size={24} />,
    cardBg: 'bg-[#2A5E91]', // To'qroq ko'k fon
  },
];

const Statistics = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate(); // <-- navigate hook

  return (
    <section ref={ref} className="bg-[#F7F7F7] py-16 px-[4%] sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Chap tomon: Matn bloki */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm font-semibold text-[#43A047] uppercase mb-2">
            /{t('services')}/
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A5E91] leading-tight mb-6">
            Complex Solution
          </h2>
          <p className="text-base text-[#555555] leading-relaxed mb-8">
            {t('statistic')}
          </p>

          {/* Button with navigation to /portfolio */}
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center justify-center px-6 py-3 bg-white border border-gray-700 text-gray-600 rounded-full font-medium hover:bg-[#0066CC] hover:text-white transition-colors duration-300 shadow-md"
          >
            <FaPlayCircle className="mr-2" size={20} />
            {t('view_more')}
          </button>
        </div>

        {/* O'ng tomon: Statistika kartochkalari */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className={`${item.cardBg} rounded-xl p-6 shadow-lg flex flex-col items-start text-left
                hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300`}
            >
              <div className="mb-4">
                <div
                  className={`p-3 rounded-full ${
                    item.cardBg === 'bg-white'
                      ? 'bg-[#4CAF50]'
                      : 'bg-white bg-opacity-20'
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    className: 'text-white',
                  })}
                </div>
              </div>
              <h3
                className="text-3xl font-bold mb-2"
                style={{
                  color: item.cardBg === 'bg-white' ? '#333333' : 'white',
                }}
              >
                {inView && <CountUp end={item.number} duration={2} />}+
              </h3>
              <p
                className="text-sm leading-relaxed font-medium"
                style={{
                  color: item.cardBg === 'bg-white' ? '#555555' : 'white',
                }}
              >
                {t(item.titleKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
