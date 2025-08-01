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
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const FolderOpenIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
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


// Asosiy bo‘lim komponenti
const Advantage2 = () => {
  const { t } = useTranslation();

  const items = [
    {
      number: '01',
      title: t('documentation_1_title'),
      description: t('documentation_1_desc'),
      icon: FileTextIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '02',
      title: t('documentation_2_title'),
      description: t('documentation_2_desc'),
      icon: FolderOpenIcon, // Ikonka komponentini qo'shildi
    },
    {
      number: '03',
      title: t('documentation_3_title'),
      description: t('documentation_3_desc'),
      icon: UsersIcon, // Ikonka komponentini qo'shildi
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24"> {/* Padding responsiv qilindi */}
      <div className='flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16'> {/* Margin responsiv qilindi */}
        <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-[36px] text-[#0E1F51] font-bold max-w-4xl leading-snug'> {/* Matn o'lchami responsiv qilindi */}
          {t('documentation_title')}
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

export default Advantage2;
