import React from 'react';
import { Outlet } from 'react-router-dom';
import portfolioimg1 from '../assets/Frame6.svg';
import { useTranslation } from 'react-i18next';

const PortfolioMoments = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-sans bg-white px-4 sm:px-[5%] py-6 sm:py-10 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 sm:gap-10 lg:gap-16">

        {/* Left Section — Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src={portfolioimg1}
            alt={t('portfolio_education.alt_text')}
            className="w-full max-w-[500px] rounded-[20px] h-auto object-contain shadow-xl"
          />
        </div>

        {/* Right Section — Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between lg:pl-8 order-1 lg:order-2">
          <div>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-snug">
              {t('portfolio_nature.title')}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              {t('portfolio_nature.description')}
            </p>

            {/* Advantages */}
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              <span className="font-bold text-[#1f4b73]">
                {t('advantag')}
              </span>{' '}
              {t('portfolio_nature.advantages')}
            </p>

            {/* Features */}
            <h4 className="text-[#1f4b73] text-lg font-bold mb-3 sm:mb-4">
              {t('chances')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 text-base">
              {t('portfolio_nature.features', { returnObjects: true }).map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#4D9C2E] mr-2 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default PortfolioMoments;
