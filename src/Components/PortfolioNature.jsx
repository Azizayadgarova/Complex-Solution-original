import React from 'react';
import portfolioimg6 from '../assets/Frame4.svg';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PortfolioNature = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-sans bg-white px-4 sm:px-6 md:px-[5%] py-6 sm:py-10 md:py-16">
      {/* 🔲 Umumiy Card Box */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 transition-shadow hover:shadow-xl duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-10 lg:gap-16">

          {/* Left Section — Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1">
            <img
              src={portfolioimg6}
              alt={t('portfolio_natur.title')}
              className="w-full max-w-md md:max-w-full rounded-xl h-auto object-contain"
            />
          </div>

          {/* Right Section — Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-between order-1 md:order-2 md:pl-6 lg:pl-10">
            <div>
              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-snug">
                {t('portfolio_natur.title')}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {t('portfolio_natur.description')}
              </p>

              {/* Advantages */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                <span className="font-bold text-[#1f4b73]">
                  {t('advantag')}
                </span>{' '}
                {t('portfolio_natur.advantages')}
              </p>

              {/* Features */}
              <h4 className="text-[#1f4b73] text-sm sm:text-base font-bold mb-3 sm:mb-4">
                {t('chances')}
              </h4>
              <div className="grid grid-cols-1 mb-5 sm:grid-cols-2 gap-y-3 sm:gap-y-4 text-sm sm:text-base">
                {t('portfolio_natur.features', { returnObjects: true }).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#4D9C2E] mr-2 mt-1 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                className="mt-8 inline-block text-sm sm:text-base font-medium text-white bg-[#1f4b73] hover:bg-[#153655] transition-colors px-10 py-2 rounded-full"
                href="https://pharm.complex-solutions.uz/login"
              >
                {t('view_more')} →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default PortfolioNature;
