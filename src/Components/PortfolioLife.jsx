import React from 'react'
import portfolioimg2 from '../assets/Frame 2.svg'
import { Outlet } from 'react-router-dom'
const PortfolioLife = () => (
  <div>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                    py-8 sm:py-10 md:py-12 lg:py-5 
                    mt-8 sm:mt-12 md:mt-[50px] 
                    rounded-3xl bg-gray-50 shadow-2xl 
                    flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
      <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'> {/* Mobil markazlash uchun flex qo'shildi */}
        <img className='max-w-full h-auto object-contain' src={portfolioimg2} alt="Loyiha rasmi" />
      </div>
      <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
        <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'> {/* Matn o'lchamlari responsiv qilindi */}
          Платформа для оформления договоров аренды для операторов
        </h3>
        <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed'> {/* Matn o'lchamlari responsiv qilindi */}
          Разработана специализированная информационная система для автоматизации процесса отвода резервных земельных участков и оформления договоров аренды для операторов телекоммуникационной связи. Система обеспечивает полное цифровое сопровождение процесса – от подачи заявки до заключения договора, исключая бумажный документооборот и ускоряя взаимодействие между всеми участниками. Дистанционное подача заявок и предварительное согласование с уполномоченными органами, автоматизированное формирование и оформление договора, мониторинг всех этапов согласования заявок, обеспечивающий прозрачность и контроль процесса.
          Преимущества: Новые возможности:
        </p>
        <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[14px] text-gray-600 gap-2 sm:gap-3 md:gap-[15px] justify-center md:justify-start'> {/* Mobil markazlash uchun justify-center qo'shildi */}
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Высокий уровень защиты данных и ограниченный доступ к информации</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Автоматизированное формирование договора аренды</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Мониторинг прогресса согласования</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Удобный интерфейс </p>
        </div>
      </div>
    </div>
    <Outlet />
  </div>
)
export default PortfolioLife
