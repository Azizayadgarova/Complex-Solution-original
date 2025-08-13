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
      {/* ✅ Hero Section */}
      <div
        className="relative py-[120px] sm:py-[150px] md:py-[180px] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Text */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
            {t('aboute')}
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-bold text-white">
            {t('home')} / {t('aboute')}
          </p>
        </div>
      </div>

      {/* ✅ Sections */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <Results />
        <OurStore />
        <Advantages />
        <Projects />
      </div>
    </div>
  );
};

export default Abaute;
