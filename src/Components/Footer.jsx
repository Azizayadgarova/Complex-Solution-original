import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import footerVideo from "../assets/video.mp4";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 🔹 useCallback bilan optimallashtirilgan navigatsiya funksiyalari
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    navigate('/signin');
  }, [navigate]);

  const goToContact = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  return (
    <footer className="relative text-white py-[100px] px-[5%] overflow-hidden">

      {/* 🔴 Background video (preload + poster) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={footerVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/fallback.jpg"  // kerak bo‘lsa placeholder rasm
      />

      {/* 🔴 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#2a5e91]/80 z-10" />

      {/* 🔴 Main content */}
      <div className="relative flex flex-col md:flex-row md:justify-between md:items-start z-20 max-w-7xl mx-auto gap-10 md:gap-6 flex-wrap">

        {/* About Us */}
        <div className="w-full sm:w-[45%] md:w-[23%]">
          <h2 className="text-[24px] font-bold mb-2">{t('footer.about_us')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-white mb-4" />
          <p className="text-sm mb-4">{t('footer.about_us_text')}</p>
          <div className="flex gap-3">
            {[FaLinkedin, FaInstagram, FaFacebook, FaTwitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white text-[#0E1F51] p-2 rounded-full hover:bg-[#0E1F51] hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="w-full sm:w-[45%] md:w-[23%]">
          <h2 className="text-[24px] font-bold mb-2">{t('footer.services')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-white mb-4" />
          <ul className="space-y-2 text-sm">
            <li>{t('footer.services_list.web')}</li>
            <li>{t('footer.services_list.app')}</li>
            <li>{t('footer.services_list.uiux')}</li>
            <li>{t('footer.services_list.hubspot')}</li>
            <li>{t('footer.services_list.email')}</li>
            <li>{t('footer.services_list.migration')}</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-full sm:w-[45%] md:w-[23%]">
          <h2 className="text-[24px] font-bold mb-2">{t('footer.subscribe')}</h2>
          <hr className="w-[50px] border-t-4 rounded-md border-white mb-4" />
          <p className="text-sm mb-4">{t('footer.subscribe_text')}</p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <button
              type="submit"
              className="bg-white hover:bg-[#1f3a6e] hover:text-white text-[#0E1F51] py-2 rounded-md transition"
            >
              {t('footer.admin_button')}
            </button>
            <button
              type="button"
              onClick={goToContact}
              className="bg-[#5c8ab7] hover:bg-[#1f3a6e] text-white py-2 rounded-md transition"
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
