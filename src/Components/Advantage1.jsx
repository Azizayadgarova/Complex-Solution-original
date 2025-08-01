import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Karta komponenti
const CardItem = ({ number, title, description, icon: IconComponent }) => { // icon propini IconComponent deb nomladim
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: parseInt(number) * 0.1 }}
      className='relative bg-white rounded-2xl border border-gray-200 shadow-lg p-6 
                 w-full h-full flex flex-col justify-between items-start text-left overflow-hidden 
                 hover:shadow-xl hover:border-[#FF3E54] transform hover:-translate-y-1 transition duration-300 ease-in-out' // Shadow va border stillari takomillashtirildi
    >
      {/* Yuqori o'ng burchakdagi raqam */}
      <div className='absolute top-4 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
        {number}
      </div>

      {/* Ikonka konteyneri */}
      <div className='bg-[#FF3E54] p-3 rounded-full shadow-md mb-4 relative z-10 flex items-center justify-center'> {/* Rang va shakl o'zgartirildi */}
        {/* Dinamik ikonka komponenti */}
        {IconComponent && <IconComponent className="w-8 h-8 text-white" />} {/* Ikonka rangi oq qilindi */}
      </div>

      {/* Sarlavha */}
      <h3 className='text-[#0E1F51] font-bold text-xl sm:text-2xl mb-3 relative z-10'> {/* Matn o'lchami responsiv qilindi */}
        {title}
        <span className='block h-0.5 w-12 bg-[#FF3E54] mt-2'></span>
      </h3>
      {/* Tavsif matni */}
      <p className='text-gray-700 text-base leading-relaxed relative z-10 flex-grow'> {/* Matn rangi va flex-grow qo'shildi */}
        {description}
      </p>
    </motion.div>
  );
};

// Ikonkalar uchun oddiy SVG komponentlari (Lucide React yoki boshqa kutubxonalar o'rnatilmagan bo'lsa)
const GearIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);


// Asosiy bo‘lim komponenti
const Advantage1 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('tech_support_1_title'),
      description: t('tech_support_1_desc'),
      icon: GearIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '02',
      title: t('tech_support_2_title'),
      description: t('tech_support_2_desc'),
      icon: ShieldIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '03',
      title: t('tech_support_3_title'),
      description: t('tech_support_3_desc'),
      icon: CheckCircleIcon, // Ikonka komponentini qo'shildi
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24"> {/* Padding responsiv qilindi */}
      <div className='flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16'> {/* Margin responsiv qilindi */}
        <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-[#0E1F51] font-bold max-w-3xl leading-snug'> {/* Matn o'lchami responsiv qilindi */}
          {t('tech_support_title')}
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"> {/* Gap responsiv qilindi */}
        {items.map((item, i) => (
          <CardItem
            key={i}
            number={item.number}
            title={item.title}
            description={item.description}
            icon={item.icon} // Ikonka propini CardItem ga uzatildi
          />
        ))}
      </div>
    </section>
  );
};

export default Advantage1;
