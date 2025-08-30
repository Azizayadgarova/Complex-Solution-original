import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Karta komponenti
const CardItem = ({ number, title, description, icon: IconComponent }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: parseInt(number, 10) * 0.1 }}
      className='relative bg-white rounded-2xl border border-gray-200 shadow-lg p-6 
                 w-full h-full flex flex-col justify-between items-start text-left overflow-hidden 
                 hover:shadow-xl hover:border-[#2a5e91] transform hover:-translate-y-1 transition duration-300 ease-in-out'
    >
      {/* Yuqori o'ng burchakdagi raqam */}
      <div className='absolute top-4 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
        {number}
      </div>

      {/* Ikonka konteyneri */}
      <div className='bg-[#2a5e91] p-3 rounded-full shadow-md mb-4 relative z-10 flex items-center justify-center'>
        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
      </div>

      {/* Sarlavha */}
      <h3 className='text-[#2a5e91] font-bold text-xl sm:text-2xl mb-3 relative z-10'>
        {title}
        <span className='block h-0.5 w-12 bg-[#4CAF50] mt-2'></span>
      </h3>
      {/* Tavsif matni */}
      <p className='text-gray-700 text-base leading-relaxed relative z-10 flex-grow'>
        {description}
      </p>
    </motion.div>
  );
};

// Ikonkalar uchun oddiy SVG komponentlari
const HeadphonesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const MessageCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const CalendarCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16.5L12 19.5L18 13.5" />
  </svg>
);



// Asosiy bo‘lim komponenti
const Advantage2 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('documentation_1_title'),
      description: t('documentation_1_desc'),
      icon: HeadphonesIcon,
    },
    {
      number: '02',
      title: t('documentation_2_title'),
      description: t('documentation_2_desc'),
      icon: MessageCircleIcon,
    },
    {
      number: '03',
      title: t('documentation_3_title'),
      description: t('documentation_3_desc'),
      icon: CalendarCheckIcon,
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-[4%] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Sarlavha */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] w-full md:w-2/3 lg:w-1/2 text-gray-700 font-bold leading-snug">
          {t('documentation_title')}
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

export default Advantage2;