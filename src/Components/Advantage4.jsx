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
      transition={{ duration: 0.5, ease: 'easeOut', delay: parseInt(number, 10) * 0.1 }}
      className='relative bg-white rounded-2xl border border-gray-200 shadow-lg p-6 
                 w-full h-full flex flex-col justify-between items-start text-left overflow-hidden 
                 hover:shadow-xl hover:border-[#0E1F51] transform hover:-translate-y-1 transition duration-300 ease-in-out' // Shadow va border stillari takomillashtirildi
    >
      {/* Yuqori o'ng burchakdagi raqam */}
      <div className='absolute top-4 right-6 text-gray-200 font-bold text-4xl md:text-5xl opacity-80 z-0'>
        {number}
      </div>

      {/* Ikonka konteyneri */}
      <div className='bg-[#0E1F51] p-3 rounded-full shadow-md mb-4 relative z-10 flex items-center justify-center'> {/* Rang va shakl o'zgartirildi */}
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
const HeadphonesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const MessageCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const CalendarCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16.5L12 19.5L18 13.5" />
  </svg>
);

const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);


// Asosiy bo‘lim komponenti
const Advantage4 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('support_1_title'),
      description: t('support_1_desc'),
      icon: HeadphonesIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '02',
      title: t('support_2_title'),
      description: t('support_2_desc'),
      icon: MessageCircleIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '03',
      title: t('support_3_title'),
      description: t('support_3_desc'),
      icon: CalendarCheckIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '04',
      title: t('support_4_title'),
      description: t('support_4_desc'),
      icon: UsersIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '05',
      title: t('support_5_title'),
      description: t('support_5_desc'),
      icon: GlobeIcon, // Ikonka komponentini qo'shildi
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24"> {/* Padding responsiv qilindi */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16"> {/* Margin responsiv qilindi */}
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] w-full md:w-2/3 lg:w-1/2 text-center text-[#0E1F51] font-bold leading-snug"> {/* Matn o'lchami responsiv qilindi */}
          {t('support_title')}
        </h4>
      </div>

      {/* Grid ustunlari 1, 2, 3 ga moslashadi. 5 ta element bo'lgani uchun oxirgi qatorda 2 ta element bo'ladi. */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> {/* Gap responsiv qilindi */}
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

export default Advantage4;
