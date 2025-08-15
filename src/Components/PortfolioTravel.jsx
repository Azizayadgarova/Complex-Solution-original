import React from 'react';
import portfolioimg6 from '../assets/Frame7.svg';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PortfolioTravel = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-sans bg-white px-4 sm:px-[5%] py-8 sm:py-12 md:py-16">
      {/* 🔲 Umumiy Card Box */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 transition-shadow hover:shadow-xl duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Left Section — Image */}
          <div className="w-full md:w-1/2 flex items-start justify-center md:justify-start order-2 md:order-1 mt-4 sm:mt-6 md:mt-0">
            <img
              src={portfolioimg6}
              alt={t('portfolio_moment.title')}
              className="w-full max-w-lg rounded-xl h-auto object-contain"
            />
          </div>

          {/* Right Section — Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-between md:pl-4 lg:pl-8 order-1 md:order-2">
            <div>
              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-4 sm:mb-6 leading-snug">
                {t('portfolio_moment.title')}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {t('portfolio_moment.description')}
              </p>

              {/* Advantages */}
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                <span className="font-bold text-[#1f4b73]">
                  {t('advantag')}
                </span>{' '}
                {t('portfolio_moment.advantages')}
              </p>

              {/* Features */}
              <h4 className="text-[#1f4b73] text-sm sm:text-base font-bold mb-3 sm:mb-4">
                {t('chances')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 text-sm sm:text-base">
                {t('portfolio_moment.features', { returnObjects: true }).map((feature, index) => (
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
      </div>

      <Outlet />
    </div>
  );
};

export default PortfolioTravel;
