import React from 'react';
import { Outlet } from 'react-router-dom';
import portfolioimg1 from '../assets/Frame1.svg';
import { useTranslation } from 'react-i18next';

const PortfolioEducation = () => {
  const { t } = useTranslation();

  const features = t('portfolio_education.features', { returnObjects: true });

  return (
    <div className="bg-white text-[#0E1F51] py-20  ">
      <div className=" px-[4%]  flex   items-center  ">

        {/* 1. Chap qism: matnlar va feature buttonlar */}
        <div className="flex-1  mt-8  lg:mt-0">
          <h3 className="text-3xl sm:text-3xl font-bold w-[0%] mb-4 text-[#0E1F51]">
            {t('portfolio_education.title')}
          </h3>
          <p className="text-gray-600 text-[16px] mb-6 max-w-md w-[65%] ">
            {t('portfolio_education.description')}
          </p>
        </div>

        {/* 2. O'ng qism: rasm */}
        <div className="flex-1 lg:order-2 order-1 flex gap-[180px] items-center ">
          <img
            src={portfolioimg1}
            alt={t('portfolio_education.alt_text')}
            className="w-full max-w-[70%] h-[370px]  object-cover shadow-2xl border-4 border-[#0E1F51]"
          />
          <div className="flex flex-col gap-3 mt-6">
            {features.map((feature, index) => (
              <button
                key={index}
                className="bg-white text-[#0E1F51] border border-[#0E1F51] px-4 py-2 rounded-full text-left hover:bg-[#0E1F51] hover:text-white transition-all duration-300"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
        
      </div>
      <Outlet />
    </div>
  );
};

export default PortfolioEducation;  