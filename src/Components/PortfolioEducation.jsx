import React from 'react';
import { Outlet } from 'react-router-dom';
import portfolioimg1 from '../assets/Frame1.svg';
import { useTranslation } from 'react-i18next'; // useTranslation hook'ini import qildim
const PortfolioEducation = () => {
  const { t } = useTranslation(); // t funksiyasini olish
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                      py-8 sm:py-10 md:py-12 lg:py-5 
                      mt-8 sm:mt-12 md:mt-[50px] 
                      rounded-3xl bg-gray-50 shadow-2xl 
                      flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
        <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'>
          {/* Tarjima kalitini alt text uchun ishlatish */}
          <img className='max-w-full h-auto object-contain' src={portfolioimg1} alt={t('portfolio_education.alt_text')} />
        </div>

        <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
          {/* Tarjima kalitini sarlavha uchun ishlatish */}
          <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'>
            {t('portfolio_education.title')}
          </h3>
          {/* Tarjima kalitini tavsif uchun ishlatish */}
          <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed'>
            {t('portfolio_education.description')}
          </p>
          <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600 gap-2 sm:gap-3 md:gap-[10px] justify-center md:justify-start'>
            {/* Xususiyatlar ro'yxatini tarjima qilish. returnObjects: true bilan massiv qaytariladi */}
            {t('portfolio_education.features', { returnObjects: true }).map((feature, index) => (
              <p key={index} className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default PortfolioEducation;
