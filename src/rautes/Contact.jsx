import React from 'react';
import { useTranslation } from 'react-i18next';
import GetInTuch from '../Components/GetInTuch';
import Contactvideo from '../assets/contactpagewideo.mp4';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white mb-[60px] sm:mb-[80px] md:mb-[100px]">
      {/* Header with Background Video */}
      <div className="relative py-[100px] sm:py-[140px] md:py-[180px] text-center text-white overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={Contactvideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
            {t('contact')}
          </h1>
          <p className="text-sm sm:text-lg md:text-[20px] font-bold text-white">
            {t('home')} / {t('contact')}
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-8 sm:mt-12">
        <GetInTuch />
      </div>
    </div>
  );
};

export default Contact;
