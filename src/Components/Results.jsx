import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import result1 from '../assets/result1.jpg';
import result2 from '../assets/result2.jpg';

// Matn animatsiyasi variantlari
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const childTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ResultBlock = ({ imageSrc, imageAlt, title, description, reverse, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: delay }}
      className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 lg:gap-14 
                  bg-white rounded-2xl border shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 
                  group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* Rasm qismi */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: delay + 0.3 }}
        className={`w-full md:w-1/2 ${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-[16px] w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] 
                     object-cover shadow-lg transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </motion.div>

      {/* Matn qismi */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={`w-full md:w-1/2 text-[#2A5E91] text-center md:text-left 
                    ${reverse ? 'md:order-1' : 'md:order-2'}`}
      >
        <motion.h2
          variants={childTextVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-5 leading-snug"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={childTextVariants}
          className="text-sm sm:text-base md:text-lg leading-relaxed text-[#444]"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Results = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F7F7F7] py-10 sm:py-14 md:py-20 px-3 sm:px-5 md:px-[4%]">
      <div className="flex flex-col gap-14 sm:gap-20 lg:gap-24 max-w-7xl mx-auto">
        <ResultBlock
          imageSrc={result1}
          imageAlt={t('result_title_1')}
          title={t('result_title_1')}
          description={t('result_desc_1')}
          reverse={false}
          delay={0.2}
        />
        <ResultBlock
          imageSrc={result2}
          imageAlt={t('result_title_2')}
          title={t('result_title_2')}
          description={t('result_desc_2')}
          reverse={true}
          delay={0.4}
        />
      </div>
    </div>
  );
};

export default Results;
