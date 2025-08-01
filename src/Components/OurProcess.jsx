import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaClipboardList, FaCogs, FaVial } from 'react-icons/fa'; // Ikonkalar import qilindi

const steps = [
  { key: 'research', number: 1, icon: <FaSearch className="text-white" size={28} /> },
  { key: 'planning', number: 2, icon: <FaClipboardList className="text-white" size={28} /> },
  { key: 'execution', number: 3, icon: <FaCogs className="text-white" size={28} /> },
  { key: 'testing', number: 4, icon: <FaVial className="text-white" size={28} /> },
];

const VerticalStep = ({ step, title, description, isLastStep }) => { // isLastStep prop qabul qilindi
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false, // Har doim ko'rinishda bo'lganda animatsiya qayta ishlaydi
    amount: 0.3, // Elementning 30% ko'ringanda animatsiya boshlanadi
  });

  return (
    <div ref={ref} className="relative pb-32 last:pb-0"> {/* Har bir qadam orasidagi bo'shliq */}
      {/* Ikonka */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 z-10 rounded-full shadow-lg" // Ikonka qadamning yuqori markazida
        style={{ width: 48, height: 48 }}
        initial={false}
        animate={{
          background: inView
            ? 'linear-gradient(45deg, #4CAF50, #0066CC)' // Yashil-ko'k gradient
            : '#d1d5db', // Aktiv bo'lmagan holat
        }}
        transition={{ duration: 1.2 }}
      >
        <div className="rounded-full w-full h-full flex items-center justify-center">
          {step.icon}
        </div>
      </motion.div>

      {/* Chiziq segmenti - ikonka ostidan keyingi qadamgacha */}
      {!isLastStep && ( // Oxirgi qadam uchun chiziqni ko'rsatmaslik
        <div className="absolute left-1/2 -translate-x-1/2 top-[48px] h-[calc(100%-48px)] w-0.5"> {/* Ikonka balandligi (48px) ostidan boshlanadi */}
          <motion.div
            className="w-full bg-gray-300" // Asosiy chiziq rangi
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4CAF50] to-[#0066CC]" // Animatsiyalanadigan gradient chiziq
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
      )}

      {/* Kontent konteyneri (Chap va O'ng matnlar) */}
      <div className="grid grid-cols-[1fr_48px_1fr] gap-x-8 items-center pt-[24px]"> {/* items-start dan items-center ga o'zgartirildi */}
        {/* Chapdagi matn (Raqam va Sarlavha) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: step.number * 0.1 }}
          className="text-right pr-4" // O'ngga tekislash va bo'shliq
        >
          <div className="flex items-center justify-end"> {/* Raqam va sarlavhani bir qatorda tekislash */}
            <h3
              className={`text-6xl font-bold transition-colors duration-300 mr-4`} // Katta raqam
              style={{
                  background: inView ? 'linear-gradient(to right, #4CAF50, #0066CC)' : 'none', // Gradient rang
                  WebkitBackgroundClip: inView ? 'text' : 'unset',
                  WebkitTextFillColor: inView ? 'transparent' : 'inherit',
                  color: inView ? 'transparent' : '#d1d5db' // Aktiv bo'lmagan holat rangi
              }}
            >
              0{step.number}
            </h3>
            <h4
              className={`text-3xl lg:text-4xl font-semibold transition-colors duration-300 ${ // Katta sarlavha
                inView ? 'text-[#333333]' : 'text-gray-600' // To'q matn rangi
              }`}
            >
              {title}
            </h4>
          </div>
        </motion.div>

        {/* Ikonka joylashgan ustun uchun bo'sh div (ikonka absolute bo'lgani uchun) */}
        <div></div> 

        {/* O'ngdagi matn (Tavsif) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // O'ng tomondan kirib keladi
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: step.number * 0.1 }}
          className="text-left pl-4" // Chapga tekislash va bo'shliq
        >
          <p className="text-xl text-[#555555] leading-relaxed"> {/* Katta tavsif matni */}
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const OurProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 px-6 lg:px-32">
      <div className="mx-auto"> {/* max-w-4xl olib tashlandi */}
        <div className="mb-16 text-center">
          <p className="text-base uppercase text-[#0066CC] font-semibold tracking-wider">
            {t('ourprocess.tagline')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mt-4 text-center">
            {t('ourprocess.title')}
          </h2>
        </div>

        <div className="relative"> {/* Barcha qadamlar uchun asosiy konteyner */}
          {steps.map((step, index) => (
            <VerticalStep
              key={step.key}
              step={step}
              title={t(`ourprocess.${step.key}.title`)}
              description={t(`ourprocess.${step.key}.description`)}
              isLastStep={index === steps.length - 1} // Oxirgi qadamni aniqlash
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
