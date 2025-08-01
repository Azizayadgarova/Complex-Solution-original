import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiReact, SiWordpress, SiWix } from 'react-icons/si';
import footerVideo from '../assets/video1.mp4';

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ i18n

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin');
  };

  return (
    <footer className="relative text-white py-[100px] px-[4%] overflow-hidden">

    

      <div className="absolute top-0 left-0 w-full h-full bg-[#]  z-10" />

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">{t('footer.about_us')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <p className="text-sm mb-4">
            {t('footer.about_us_text')}
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white"><FaLinkedin /></a>
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white"><FaInstagram /></a>
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white"><FaFacebook /></a>
            <a href="#" className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#FF3E54] hover:text-white"><FaTwitter /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">{t('footer.services')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <ul className="space-y-2 text-sm">
            <li>{t('footer.services_list.web')}</li>
            <li>{t('footer.services_list.app')}</li>
            <li>{t('footer.services_list.uiux')}</li>
            <li>{t('footer.services_list.hubspot')}</li>
            <li>{t('footer.services_list.email')}</li>
            <li>{t('footer.services_list.migration')}</li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">{t('footer.career')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <SiReact className="text-2xl bg-white text-[#0E1F51] p-1 rounded-full" />
              <div>
                <p className="font-semibold text-[#FF3E54]">{t('footer.career_roles.react.title')}</p>
                <p>{t('footer.career_roles.react.exp')}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <SiWordpress className="text-2xl bg-white text-[#0E1F51] p-1 rounded-full" />
              <div>
                <p className="font-semibold text-[#FF3E54]">{t('footer.career_roles.wordpress.title')}</p>
                <p>{t('footer.career_roles.wordpress.exp')}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <SiWix className="text-2xl bg-white text-[#0E1F51] p-1 rounded-full" />
              <div>
                <p className="font-semibold text-[#FF3E54]">{t('footer.career_roles.python.title')}</p>
                <p>{t('footer.career_roles.python.exp')}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-[24px] font-bold mb-2">{t('footer.subscribe')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-[#FF3E54] mb-4" />
          <p className="text-sm mb-4">
            {t('footer.subscribe_text')}
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <button
              type="submit"
              className="bg-[#FF3E54] hover:bg-red-600 text-white py-2 rounded-md"
            >
              {t('footer.admin_button')}
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="bg-[#FF3E54] hover:bg-red-600 text-white py-2 rounded-md"
            >
              {t('contact_button')}
            </button>

          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
