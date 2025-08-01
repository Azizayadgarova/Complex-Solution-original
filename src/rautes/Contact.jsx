import React from 'react';
import { useTranslation } from 'react-i18next';
import GetInTuch from '../Components/GetInTuch';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="my-10 rounded-lg">
      <div className="bg-[#0E1F51] py-16 text-center px-4 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-[#FF3E54] text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          {t('contact')}
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg">
          {t('home')} / {t('contact')}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <GetInTuch />
      </div>
    </div>
  );
};

export default Contact;
