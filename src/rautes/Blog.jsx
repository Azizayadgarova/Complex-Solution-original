import React from 'react';
import { useTranslation } from 'react-i18next';
import Projects from '../Components/Projects';
import img from '../assets/employees.jpg'
const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white'>
      <div style={{ backgroundImage: `url(${img})` }} className="  py-[180px] text-center">
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>
        <div className='relative z-10'>
          <h1 className="text-6xl text-white font-bold mb-2">{t('blog')}</h1>
          <p className="text-[20px] font-bold text-white">{t('home')} / {t('blog')}</p>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default Blog;
