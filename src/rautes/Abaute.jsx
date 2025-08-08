import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import image from '../assets/aboute.png';
import OurStore from '../Components/OurStore';
import Advantages from '../Components/Advantages';
import Projects from '../Components/Projects';
import Results from '../Components/Results';

const Abaute = () => {
  const { t } = useTranslation();
  const ref = useRef();

  return (
    <div ref={ref} className="bg-white">
      <div
        className="relative py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* ✅ Matn (overlay ustida bo'lishi uchun z-10) */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-2">{t('aboute')}</h1>
          <p className="text-[20px] font-bold text-white">
            {t('home')} / {t('aboute')}
          </p>
        </div>
      </div>
   <Results />
      <OurStore />
      <Advantages />
   
      <Projects />
    </div>
  );
};

export default Abaute;
