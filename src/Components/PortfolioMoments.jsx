import React from 'react'
import portfolioimg5 from '../assets/Frame5.svg'
import portfolioimg4 from '../assets/Frame4.svg'

import { Outlet } from 'react-router-dom'

const PortfolioMoments = () => (
  <div>
    {/* Первый блок проекта */}
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                    py-8 sm:py-10 md:py-12 lg:py-5 
                    mt-8 sm:mt-12 md:mt-[50px] 
                    rounded-3xl bg-gray-50 shadow-2xl 
                    flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
      
      {/* Секция изображения: ширина и отступы сделаны адаптивными */}
      <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'> {/* Добавлен flex для центрирования на мобильных устройствах */}
        <img className='max-w-full h-auto object-contain' src={portfolioimg5} alt="Изображение проекта 1" />
      </div>

      {/* Секция текстового контента: ширина, отступы и выравнивание текста сделаны адаптивными */}
      <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
        <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'> {/* Размеры текста сделаны адаптивными */}
          Система финансирования лечения лиц входящих в льготную категорию
        </h3>
        <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed'> {/* Размеры текста сделаны адаптивными */}
          Разработана платформа, которая обеспечивает автоматизацию процесса начиная от формирования отчета до финансирования лечения лиц, входящих в льготную категорию. Реализована автоматическая проверка при формировании отчетов на соответствие нормативам, установленным Министерством здравоохранения и Министерством финансов.
          Преимущества: Прозрачное распределение средств, автоматизация учёта и контроля отчетов, соответствие внесенных данных требованиям аудиторов, снижение бюрократической нагрузки.
          Новые возможности:
        </p>
        
        {/* Секция тегов: отступы, отступы и размеры текста сделаны адаптивными */}
        <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[14px] text-gray-600 gap-2 sm:gap-3 md:gap-[15px] justify-center md:justify-start'> {/* Добавлен justify-center для центрирования на мобильных устройствах */}
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Онлайн формирование отчетов и отправка на запроса на финансирование</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ MIS, MIS2, DMED</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ ГЦП, Минюст, ГНК, ВТЭК</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ MyGOV </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ OneID, E-IMZO </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Отслеживание статуса финансирования </p>
        </div>
      </div>
    </div>

    {/* Второй блок проекта */}
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                    py-8 sm:py-10 md:py-12 lg:py-5 
                    mt-8 sm:mt-12 md:mt-[50px] 
                    rounded-3xl bg-gray-50 shadow-2xl 
                    flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
      
      {/* Секция изображения: ширина и отступы сделаны адаптивными */}
      <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'> {/* Добавлен flex для центрирования на мобильных устройствах */}
        <img className='max-w-full h-auto object-contain' src={portfolioimg4} alt="Изображение проекта 2" />
      </div>

      {/* Секция текстового контента: ширина, отступы и выравнивание текста сделаны адаптивными */}
      <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
        <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'> {/* Размеры текста сделаны адаптивными */}
          Информационная система для сети аптек в г.Навои, Узбекистан
        </h3>
        <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed'> {/* Размеры текста сделаны адаптивными */}
          Разработана система для ООО “NAVBAXOR PHARM”, которая позволила управлять и мониторить всеми аптеками и складами в режиме онлайн, оптимизировать процессы закупок, учёта и логистики, а также увеличить скорость работы персонала в несколько раз. 
          Преимущества: Централизованное управление, быстрый доступ к данным, сокращение ошибок и снижение затрат. 
          Новые возможности:
        </p>
        
        {/* Секция тегов: отступы, отступы и размеры текста сделаны адаптивными */}
        <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[14px] text-gray-600 gap-2 sm:gap-3 md:gap-[15px] justify-center md:justify-start'> {/* Добавлен justify-center для центрирования на мобильных устройствах */}
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ OFD&XPrinter</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Orbit сканер</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Автоматизация заказов</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Онлайн-мониторинг запасов </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Ревизия аптек </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Накладные </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Быстрая продажа </p>
        </div>
      </div>
    </div>

    <Outlet />
  </div>
);

export default PortfolioMoments;
