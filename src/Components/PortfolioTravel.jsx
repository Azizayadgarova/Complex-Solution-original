import React from 'react';
import portfolioimg7 from '../assets/Frame7.svg';
import { Outlet } from 'react-router-dom';

const PortfolioTravel = () => (
  <div>
    {/* Основной контейнер: отступы, отступы и направление flex сделаны адаптивными */}
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[20px] 
                    py-8 sm:py-10 md:py-12 lg:py-5 
                    mt-8 sm:mt-12 md:mt-[50px] 
                    rounded-3xl bg-gray-50 shadow-2xl 
                    flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[10%] items-center'>
      
      {/* Секция изображения: ширина и отступы сделаны адаптивными */}
      <div className='w-full md:w-[40%] flex justify-center mb-6 md:mb-0'> {/* Добавлен flex для центрирования на мобильных устройствах */}
        <img className='max-w-full h-auto object-contain' src={portfolioimg7} alt="Изображение проекта" />
      </div>

      {/* Секция текстового контента: ширина, отступы и выравнивание текста сделаны адаптивными */}
      <div className='w-full md:w-[40%] md:pl-8 text-center md:text-left'>
        <h3 className='text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mt-3 font-medium mb-3'> {/* Размеры текста сделаны адаптивными */}
          Панель управления Cloud услугами Дата центра для клиентов
        </h3>
        <p className='text-gray-500 py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed'> {/* Размеры текста сделаны адаптивными */}
          Разрабатывается платформа для управления облачными услугами дата-центра, включая выделение виртуальных и физических серверов, управление квотами на виртуальные ресурсы, предоставление услуги «Виртуальный дата-центр» и администрирование всех Cloud-сервисов дата-центра.
          Преимущества: Гибкое масштабирование, централизованное управление, высокая производительность и безопасность.
          Новые возможности:
        </p>
        
        {/* Секция тегов: отступы, отступы и размеры текста сделаны адаптивными */}
        <div className='mt-4 py-4 flex flex-wrap text-xs sm:text-sm md:text-base lg:text-[14px] text-gray-600 gap-2 sm:gap-3 md:gap-[15px] justify-center md:justify-start'> {/* Добавлен justify-center для центрирования на мобильных устройствах */}
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Автоматизированное выделение ресурсов</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Click, Payme, Paynet</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ VIZA, UnionPay</p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Управление виртуальными машинами </p>
          <p className='rounded-[15px] px-3 py-1.5 bg-gray-100 font-medium text-center'>✓ Мониторинг состояния серверов </p>
        </div>
      </div>
    </div>
    <Outlet />
  </div>
);

export default PortfolioTravel;
