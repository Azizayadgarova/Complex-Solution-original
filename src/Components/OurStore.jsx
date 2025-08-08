import React from 'react'
import { useTranslation } from 'react-i18next';
import itpark from '../assets/itpark.png'
import rasm4 from '../assets/abouteimg.jpg'

const OurStore = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-[#F7F7F7]  flex flex-col md:flex-row px-[5%] py-[60px] md:py-[100px] justify-between items-center gap-10 md:gap-0'>
            {/* Rasm qismi */}
            <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
                <img 
                  className='max-w-[450px] bg-[#3D9900] w-full rounded-xl object-contain' 
                  src={rasm4} 
                  alt="About us image" 
                />
              
            </div>

            {/* Matn qismi */}
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
                <p className='text-[#3D9900] text-[20px] md:text-[24px] font-medium mb-2'>\ {t('label')} \</p>
                <h2 className='text-[#193b63] text-[30px] md:text-[40px] w-full md:w-[85%] font-medium leading-tight mb-4'>
                  COMPLEX SOLUTIONS LLC
                </h2>
                <p className='w-full md:w-[80%] font-normal mb-6 text-sm md:text-base'>
                  {t('text')}
                </p>

                <div className='flex items-center bg-white w-full max-w-[350px] rounded-xl shadow-sm p-3'>
                    <img className='h-[70px] md:h-[90px] object-contain' src={itpark} alt="IT Park Logo" />
                    <span className='ml-4 font-medium text-sm md:text-base'>{t('resident')}</span>
                </div>
            </div>
        </div>
    )
}

export default OurStore
