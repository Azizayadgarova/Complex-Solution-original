import React from 'react';
import { Outlet } from 'react-router-dom';
import portfolioimg1 from '../assets/Frame1.svg';
import { useTranslation } from 'react-i18next';

const PortfolioEducation = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-sans bg-white px-[5%] py-8 sm:py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Section — Image */}
        <div className="w-full md:w-1/2 flex items-start justify-center md:justify-start order-2 md:order-1 mt-6 md:mt-0">
          <img
            src={portfolioimg1}
            alt={t('portfolio_education.alt_text')}
            className="w-full max-w-lg rounded-[20px] h-auto object-contain shadow-xl"
          />
        </div>

        {/* Right Section — Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-between md:pl-8 order-1 md:order-2 text-center md:text-left">
          <div>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 mb-6 leading-snug">
              {t('portfolio_education.title')}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              {t('portfolio_education.description')}
            </p>

            {/* Advantages */}
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              <span className="font-bold text-[#1f4b73]">{t('advantag')}</span>{' '}
              {t('portfolio_education.advantages')}
            </p>

            {/* New Features */}
            <h4 className="text-[#1f4b73] text-base sm:text-lg font-bold mb-4">
              {t('chances')}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 text-sm sm:text-base">
              {t('portfolio_education.features', { returnObjects: true }).map(
                (feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center sm:justify-start"
                  >
                    <span className="text-[#4D9C2E] mr-2 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-gray-600">{feature}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default PortfolioEducation;
