import React from 'react'
import { useTranslation } from 'react-i18next';
import itpark from '../assets/itpark.png';
import rasm4 from '../assets/aboute.webp'; // ⚡ agar imkon bo'lsa WebP formatini ishlating

const OurStore = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Preload LCP image (asosiy katta rasm) */}
      <link rel="preload" as="image" href={rasm4} />

      <div className="bg-[#F7F7F7] flex flex-col md:flex-row px-[5%] py-[60px] md:py-[100px] justify-between items-center gap-10 md:gap-0">
        
        {/* Rasm qismi */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={rasm4}
            alt="About us image"
            width="450"
            height="300"
            loading="lazy"
            decoding="async"
            className="max-w-[450px] bg-[#3D9900] w-full rounded-xl object-contain"
          />
        </div>

        {/* Matn qismi */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[#3D9900] text-[20px] md:text-[24px] font-medium mb-2">
            \ {t('label')} \
          </p>
          <h2 className="text-[#193b63] text-[30px] md:text-[40px] w-full md:w-[85%] font-medium leading-tight mb-4">
            COMPLEX SOLUTIONS LLC
          </h2>
          <p className="w-full md:w-[80%] font-normal mb-6 text-sm md:text-base">
            {t('text')}
          </p>

          <div className="flex items-center bg-white w-full max-w-[350px] rounded-xl shadow-sm p-3">
            <img
              src={itpark}
              alt="IT Park Logo"
              width="90"
              height="90"
              loading="lazy"
              decoding="async"
              className="h-[70px] md:h-[90px] object-contain"
            />
            <span className="ml-4 font-medium text-sm md:text-base">
              {t('resident')}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
