import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserTie, FaCogs, FaLightbulb, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const data = [
  { id: '1', title: 'advantages_1_title', content: 'advantages_1_content', icon: FaUserTie },
  { id: '2', title: 'advantages_2_title', content: 'advantages_2_content', icon: FaCogs },
  { id: '3', title: 'advantages_3_title', content: 'advantages_3_content', icon: FaLightbulb },
  { id: '4', title: 'advantages_4_title', content: 'advantages_4_content', icon: FaShieldAlt },
  { id: '5', title: 'advantages_5_title', content: 'advantages_5_content', icon: FaSyncAlt },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  hover: { scale: 1.03, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' },
  open: { boxShadow: '0 10px 20px rgba(0,0,0,0.2)' },
};

const contentVariants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1 },
};

const Advantages = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);

  const toggle = idx => setExpanded(prev => (prev === idx ? null : idx));

  return (
    <div className="px-4 bg-[#F7F7F7] md:px-8 lg:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C2D64] mb-16">
        {t('advantages_subtitle')}
      </h2>

      <div className="grid grid-cols-1 gap-10">
        {data.map((item, i) => {
          const isOpen = expanded === i;
          const Icon = item.icon;
          // Static inline styles for background and text color
          const bgColor = i % 2 === 0 ? '#1C3B6F' : '#FFFFFF';
          const textColor = i % 2 === 0 ? '#FFFFFF' : '#333333';

          return (
            <motion.div
              key={item.id}
              custom={i}
              layout
              variants={cardVariants}
              initial="rest"
              animate={isOpen ? 'open' : 'rest'}
              whileHover="hover"
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: bgColor, color: textColor }}
              className="w-full relative rounded-2xl p-4 pt-10 flex flex-col items-center text-center cursor-pointer"
            >
              <div
                className="absolute -top-6 p-4 rounded-full"
                style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#4CAF50' }}
              >
                <Icon size={32} style={{ color: i % 2 === 0 ? '#1C2D64' : '#FFFFFF' }} />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-4">
                {t(item.title)}
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    key={`cont-${item.id}`}
                    variants={contentVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    transition={{ duration: 0.3 }}
                    className="mb-4 overflow-hidden"
                    style={{ color: textColor }}
                  >
                    {t(item.content)}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                onClick={() => toggle(i)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition"
                style={{
                  color: isOpen
                    ? (i % 2 === 0 ? '#1C3B6F' : '#333333')
                    : (i % 2 === 0 ? '#FFFFFF' : '#333333'),
                  backgroundColor: isOpen ? '#FFFFFF' : 'transparent',
                  border: i % 2 === 0 ? '2px solid #FFFFFF' : 'none'
                }}
              >
                {isOpen ? <HiMinus size={20} /> : <HiPlus size={20} />}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;
  