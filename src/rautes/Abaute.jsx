import React, { useRef } from 'react'; // ✅ useRef import qilindi
import { useTranslation } from 'react-i18next';

import OurStore from '../Components/OurStore';
import Advantages from '../Components/Advantages';
import Projects from '../Components/Projects';
import Results from '../Components/Results';

const Abaute = () => {
  const { t } = useTranslation();
  const ref = useRef(); // ✅ ref aniqlandi

  return (
    <div ref={ref} className='bg-white'>
      <div className="bg-[#0E1F51] py-16 text-center">
        <h1 className="text-[#FF3E54] text-[40px] font-bold mb-2">{t('aboute')}</h1>
        <p className="text-white text-[18px]">{t('home')} / {t('aboute')}</p>
      </div>
      <OurStore />
      <Advantages />
      <Results />
      <Projects />
    </div>
  );
};

export default Abaute;
