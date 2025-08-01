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
      staggerChildren: 0.2, // Ichki elementlar uchun kechikish
    },
  },
};

// Ichki matn elementlari uchun variantlar
const childTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Natija bloki komponenti
const ResultBlock = ({ imageSrc, imageAlt, title, description, reverse, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: delay }}
      // className propidagi sintaksis tekshirildi va to'g'rilandi
      className={`flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl border  shadow-xl p-6 md:p-10 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl `}
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
          className="rounded-[16px] w-full h-auto shadow-lg transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </motion.div>

      {/* Matn qismi */}
      <motion.div
        variants={textVariants} // Matn konteyneri uchun variantlar
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`w-full md:w-1/2 text-[#2A5E91] ${reverse ? 'md:order-1' : 'md:order-2'}`} // Matn rangini #2A5E91 ga o'zgartirdim
      >
        <motion.h2
          variants={childTextVariants} // Sarlavha uchun variantlar
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 leading-snug"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={childTextVariants} // Tavsif uchun variantlar
          className="text-base sm:text-lg leading-relaxed text-[#444]"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Asosiy Results komponenti
const Results = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F7F7F7] py-20 px-4 sm:px-6 md:px-[4%]"> {/* Umumiy fon va padding */}
      {/* Bo'lim sarlavhasi */}
     

      {/* Natija bloklari */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto"> {/* Max-width va markazlash */}
        <ResultBlock
          imageSrc={result1}
          imageAlt={t('result_title_1')} // i18n kalitini ishlatdim
          title={t('result_title_1')} // i18n kalitini ishlatdim
          description={t('result_desc_1')} // i18n kalitini ishlatdim
          reverse={false}
          delay={0.2} // Animatsiya kechikishi
        />

        <ResultBlock
          imageSrc={result2}
          imageAlt={t('result_title_2')} // i18n kalitini ishlatdim
          title={t('result_title_2')} // i18n kalitini ishlatdim
          description={t('result_desc_2')} // i18n kalitini ishlatdim
          reverse={true} // Joylashuvni o'zgartirish
          delay={0.4} // Animatsiya kechikishi
        />
      </div>
    </div>
  );
};

export default Results;

