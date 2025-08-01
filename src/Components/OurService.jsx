import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FaLaptopCode, FaBullhorn, FaRocket, FaPaintBrush, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import rasm1 from '../assets/rasm1.jpg';
import rasm2 from '../assets/rasm2.jpg';
import rasm3 from '../assets/rasm3.jpg';
import rasm4 from '../assets/rasm4.jpg';
import rasm5 from '../assets/rasm5.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
};

const OurService = () => {
  const { t } = useTranslation();

  const serviceItems = [
    { key: 'serviceone', icon: <FaLaptopCode className="text-white text-3xl" />, path: '/services', bgImage: rasm1 },
    { key: 'servicetwo', icon: <FaBullhorn className="text-white text-3xl" />, path: '/services/one', bgImage: rasm2 },
    { key: 'servicethree', icon: <FaRocket className="text-white text-3xl" />, path: '/services/two', bgImage: rasm3 },
    { key: 'servicefour', icon: <FaPaintBrush className="text-white text-3xl" />, path: '/services/three', bgImage: rasm4 },
    { key: 'servicefive', icon: <FaCogs className="text-white text-3xl" />, path: '/services/four', bgImage: rasm5 }
  ];

  return (
    <div className="py-20 bg-white text-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-base uppercase text-[#4CAF50] font-semibold tracking-wider mb-2"
        >
          \ {t('servises')} \
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-[#0E1F51] mt-4"
        >
          {t('our_services')}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {serviceItems.map(({ key, icon, path, bgImage }, index) => {
          const [title, ...description] = t(key).split(':');

          let colSpan = 'lg:col-span-2'; // default for 1-3
          if (index >= 3) colSpan = 'lg:col-span-3'; // last 2 cards span 3 columns

          return (
            <motion.div
              key={key}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              className={`relative bg-white rounded-xl border border-gray-200 shadow-lg px-8 py-10 flex flex-col items-center text-center transition duration-300 group hover:border-[#0066CC] overflow-hidden ${colSpan}`}
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="mb-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="inline-block p-4 rounded-xl border-white shadow-sm"
                >
                  {icon}
                </motion.div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 relative z-10">{title}</h3>
              <p className="text-white text-xl mb-4 max-w-[320px] sm:max-w-[300px] relative z-10">
                {description.join(':')}
              </p>

              <NavLink
                to={path}
                className="group text-white font-semibold flex items-center gap-2 hover:text-[#4CAF50] transition-all duration-300 text-base mt-6 relative z-10"
              >
                {t('more')}
                <span className="text-lg transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
