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
                 hover:shadow-xl hover:border-[#0E1F51] transform hover:-translate-y-1 transition duration-300 ease-in-out' // Shadow va border stillari takomillashtirildi
    >
      {/* Yuqori o'ng burchakdagi raqam */}
      <div className='absolute top-4 right-6 text-gray-200 font-bold text-5xl opacity-80 z-0'>
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
const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CloudIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const MonitorIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const DatabaseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const ServerIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.02" y2="18" />
  </svg>
);


// Asosiy bo‘lim komponenti
const Advantage3 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('software_1_title'),
      description: t('software_1_desc'),
      icon: CodeIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '02',
      title: t('software_2_title'),
      description: t('software_2_desc'),
      icon: CloudIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '03',
      title: t('software_3_title'),
      description: t('software_3_desc'),
      icon: MonitorIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '04',
      title: t('software_4_title'),
      description: t('software_4_desc'),
      icon: DatabaseIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '05',
      title: t('software_5_title'),
      description: t('software_5_desc'),
      icon: ServerIcon, // Ikonka komponentini qo'shildi
    }
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24"> {/* Padding responsiv qilindi */}
      <div className='flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16'> {/* Margin responsiv qilindi */}
        <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-[#0E1F51] font-bold max-w-4xl leading-snug'> {/* Matn o'lchami responsiv qilindi */}
          {t("software_title")}
        </h4>
      </div>

      {/* Grid ustunlari 1, 2, 3 ga moslashadi. 5 ta element bo'lgani uchun oxirgi qatorda 2 ta element bo'ladi. */}
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

export default Advantage3;
