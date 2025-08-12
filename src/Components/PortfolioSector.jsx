import React from 'react';
import portfolioimg6 from '../assets/Frame3.svg';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PortfolioSector = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-sans bg-white px-[5%] py-8 sm:py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 lg:gap-16">

        {/* Left Section — Image */}
        <div className="w-full md:w-1/2 flex items-start justify-start order-2 md:order-1 mt-8 md:mt-0">
          <img
            src={portfolioimg6}
            alt={t('portfolio_sector.title')}
            className="w-full rounded-[20px] h-auto object-contain shadow-xl"
          />
        </div>

        {/* Right Section — Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-between md:pl-8 order-1 md:order-2">
          <div>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 mb-6 leading-snug">
              {t('portfolio_sector.title')}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              {t('portfolio_sector.description')}
            </p>

            {/* Advantages */}
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              <span className="font-bold text-[#1f4b73]">
                {t('advantag')}
              </span>{' '}
              {t('portfolio_sector.advantages')}
            </p>

            {/* Features */}
            <h4 className="text-[#1f4b73] text-base font-bold mb-4">
              {t('chances')}
            </h4>
            <div className="grid grid-cols-2 gap-y-4 text-sm md:text-base">
              {t('portfolio_nature.features', { returnObjects: true }).map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#4D9C2E] mr-2 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
           
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default PortfolioSector;
