import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import coponylogo from '../assets/logo.png';

const HOVER_COLOR = '#2a5e91';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#F7F7F7] fixed top-0 left-0 right-0 w-full z-50 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-[4%] mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0">
          <img 
            className="h-[50px] xs:h-[60px] sm:h-[70px] md:h-[80px] lg:h-[85px] xl:h-[95px] w-auto" 
            src={coponylogo} 
            alt="logo" 
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex text-[15px] xl:text-[17px] font-medium gap-4 xl:gap-6 items-center">
          {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
            <li key={path}>
              <Link
                to={`/${path}`}
                className="relative group pb-1 text-[#2a5e91] hover:text-[#1d456a] block transition-colors duration-200 whitespace-nowrap"
              >
                <span>{t(path)}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2a5e91] transition-all duration-200 group-hover:w-full"
                ></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="w-[110px] xl:w-[130px] h-[35px] xl:h-[40px] bg-[#4CAF50] text-white text-sm xl:text-base font-normal rounded-[5px]
              flex items-center justify-center hover:bg-[#388E3C] transition duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {t('get_in_touch')}
            </Link>
          </li>
          <li>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-white text-[#337ab7] rounded-[5px] px-2 xl:px-3 py-1.5 xl:py-2 text-sm xl:text-base outline-none border border-gray-300 min-w-[60px]"
              value={i18n.language}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>

        {/* Tablet menu (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-white text-[#337ab7] rounded-[5px] px-2 py-1.5 text-sm outline-none border border-gray-300"
            value={i18n.language}
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-6 h-6 gap-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile/Tablet menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
      />
      
      {/* Mobile/Tablet menu sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-72 sm:w-80 bg-[#F7F7F7] h-full shadow-xl transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <span className="block w-5 h-0.5 bg-[#0E1F51] rotate-45 absolute"></span>
            <span className="block w-5 h-0.5 bg-[#0E1F51] -rotate-45 absolute"></span>
          </button>
        </div>

        <div className="px-6 pb-6">
          <ul className="flex flex-col gap-2 text-[#0E1F51] font-medium text-base">
            {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  onClick={closeMenu}
                  className="block py-3 px-2 border-b border-gray-200 hover:text-[#2a5e91] hover:bg-gray-50 transition-all duration-200 rounded-md"
                >
                  {t(path)}
                </Link>
              </li>
            ))}
            
            {/* Mobile Get in Touch button */}
            <li className="mt-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-center bg-[#4CAF50] text-white py-3 px-4 rounded-md hover:bg-[#388E3C] transition-colors duration-200 font-medium"
              >
                {t('get_in_touch')}
              </Link>
            </li>
            
            {/* Mobile Language selector */}
            <li className="mt-4">
              <label className="block text-sm text-gray-600 mb-2">{t('language') || 'Language'}</label>
              <select
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  closeMenu();
                }}
                className="bg-white text-[#0E1F51] rounded-md px-3 py-2.5 border border-gray-300 outline-none w-full focus:ring-2 focus:ring-[#2a5e91] focus:border-transparent transition-all"
                value={i18n.language}
              >
                <option value="uz">🇺🇿 </option>
                <option value="ru">🇷🇺 </option>
                <option value="en">🇺🇸</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}