    import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// ✅ Karta komponenti - Yangi ranglar va dizayn
const CardItem = ({ number, title, description, icon: IconComponent }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: parseInt(number, 10) * 0.1 }}
      className="relative bg-white rounded-2xl border border-gray-200 shadow-lg p-6 
                 w-full h-full flex flex-col justify-between items-start text-left overflow-hidden 
                 hover:shadow-xl hover:border-[#2a5e91] transform hover:-translate-y-1 transition duration-300 ease-in-out" // Yashil rangli hover border
    >
      {/* Raqam */}
      <div className="absolute top-4 right-6 text-gray-200 font-bold text-4xl md:text-5xl opacity-80 z-0">
        {number}
      </div>

      {/* Ikonka */}
      <div className="bg-[#2a5e91] p-3 rounded-full shadow-md mb-4 relative z-10 flex items-center justify-center"> {/* Yashil rangli fon */}
        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
      </div>

      {/* Sarlavha */}
      <h3 className="text-[#1C3B6F] font-bold text-xl sm:text-2xl mb-3 relative z-10"> {/* To'q ko'k rangli sarlavha */}
        {title}
        <span className="block h-0.5 w-12 bg-[#4CAF50] mt-2"></span> {/* Yashil rangli chiziq */}
      </h3>

      {/* Tavsif */}
      <p className="text-gray-700 text-base leading-relaxed relative z-10 flex-grow"> {/* To'q kulrang matn */}
        {description}
      </p>
    </motion.div>
  );
};

// ✅ SVG ikonkalar
const SearchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const LightbulbIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6M10 22h4M12 22v-4" />
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const RocketIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.75-.75 1.09-1.64.94-2.61-.52-.16-1.17-.3-1.94-.59-1.48-.56-2.64-1.8-3.11-3.49-.96-3.37-.5-6.79 1.17-9.44C10.74 2.16 13.99 3.13 16 7c-2.83 0-5.17 1.17-7 3 1.26 1.5 5 2 5 2s-1.26 3.74-2 5c-.75.75-1.64 1.09-2.61.94-.16-.52-.3-1.17-.59-1.94-.56-1.48-1.8-2.64-3.49-3.11-3.37-.96-6.79-.5-9.44 1.17z" />
    <path d="M14.5 10.5l-9 9M10.5 14.5l9-9" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ✅ Asosiy komponent
const Advantage5 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('fullcycle_1_title'),
      description: t('fullcycle_1_desc'),
      icon: SearchIcon,
    },
    {
      number: '02',
      title: t('fullcycle_2_title'),
      description: t('fullcycle_2_desc'),
      icon: LightbulbIcon,
    },
    {
      number: '03',
      title: t('fullcycle_3_title'),
      description: t('fullcycle_3_desc'),
      icon: CodeIcon,
    },
    {
      number: '04',
      title: t('fullcycle_4_title'),
      description: t('fullcycle_4_desc'),
      icon: RocketIcon,
    },
    {
      number: '05',
      title: t('fullcycle_5_title'),
      description: t('fullcycle_5_desc'),
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-[4%] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Sarlavha */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] w-full md:w-2/3 lg:w-1/2 text-gray-700 font-bold leading-snug">
          {t('fullcycle_title')}
        </h4>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 sm:gap-8">
        {items.map((item, i) => (
          <CardItem
            key={i}
            number={item.number}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Advantage5;
