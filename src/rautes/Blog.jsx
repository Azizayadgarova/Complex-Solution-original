import React from 'react';
import { useTranslation } from 'react-i18next';
import Projects from '../Components/Projects';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white'>
      <div className="bg-[#0E1F51] py-16 text-center">
        <h1 className="text-[#FF3E54] text-[48px] font-bold mb-2">{t('blog')}</h1>
        <p className="text-white text-[18px]">{t('home')} / {t('blog')}</p>
      </div>
      <Projects/>
    </div>
  );
}

export default Blog;
