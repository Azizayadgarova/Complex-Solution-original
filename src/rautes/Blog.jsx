import React from 'react';
import { useTranslation } from 'react-i18next';
import Projects from '../Components/Projects';
import img from '../assets/employees.jpg';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="relative py-[120px] sm:py-[150px] md:py-[180px] text-center bg-cover bg-center"
           style={{ backgroundImage: `url(${img})` }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#355c6e] opacity-50 z-0"></div>

        {/* Text content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold mb-2">
            {t('blog')}
          </h1>
          <p className="text-sm sm:text-base md:text-[20px] font-bold text-white">
            {t('home')} / {t('blog')}
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <Projects />
      </div>
    </div>
  );
}

export default Blog;
