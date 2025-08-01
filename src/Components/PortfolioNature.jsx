  import React from 'react';
import portfolioimg6 from '../assets/Frame6.svg';
import { Outlet } from 'react-router-dom';

const PortfolioNature = () => (
  <div>
    {/* Основной контейнер: отступы, отступы и направление flex сделаны адаптивными */}
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                    py-8 sm:py-10 md:py-12 lg:py-5 
                    mt-8 sm:mt-12 md:mt-[50px] 
                    rounded-3xl bg-gray-50 shadow-2xl 
                    flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
      
      {/* Секция изображения: ширина и отступы сделаны адаптивными */}
      <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'> {/* Добавлен flex для центрирования на мобильных устройствах */}
        <img className='max-w-full h-auto object-contain' src={portfolioimg6} alt="Изображение проекта" />
      </div>

      {/* Секция текстового контента: ширина, отступы и выравнивание текста сделаны адаптивными */}
      <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
        <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'> {/* Размеры текста сделаны адаптивными */}
          Единая система арендования сельхоз земель Республики Узбекистан
        </h3>
        <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed'> {/* Размеры текста сделаны адаптивными */}
          Разработана и внедрена система, обеспечивающая формирование проектов земельных участков, электронное согласование с уполномоченными организациями, вывод участков на аукцион, заключение электронного договора аренды и формирование кадастровых документов.
          Преимущества: Прозрачность и ускорение процесса выделения сельхоз земель, интеграция с государственными информационными системами и платформами, автоматизация документооборота.
          Новые возможности:
        </p>
        
        {/* Секция тегов: отступы, отступы и размеры текста сделаны адаптивными */}
        <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[14px] text-gray-600 gap-2 sm:gap-3 md:gap-[15px] justify-center md:justify-start'> {/* Добавлен justify-center для центрирования на мобильных устройствах */}
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ E-AUKSION</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ UzCAD</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ OneID, E-IMZO</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Отслеживание статуса </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Удобный интерфейс управления </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Карта арендованных сельхоз земель</p>
        </div>
      </div>
    </div>
    <Outlet />
  </div>
);

export default PortfolioNature;
