import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import coponylogo from '../assets/logo.webp';

const HOVER_COLOR = '#2a5e91';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Calculate navbar height and set body padding
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height);
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    // Initial calculation with delay to ensure DOM is ready
    const timer = setTimeout(updateNavbarHeight, 100);
    
    // Also run immediately
    updateNavbarHeight();

    // Handle resize
    const handleResize = () => {
      updateNavbarHeight();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', updateNavbarHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', updateNavbarHeight);
      document.documentElement.style.removeProperty('--navbar-height');
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar spacer - to prevent content from going under navbar */}
      <div className="h-[60px] sm:h-[70px] md:h-[80px] lg:h-[85px] xl:h-[95px]" style={{ height: 'var(--navbar-height, 80px)' }}></div>
      
      <nav className="bg-[#F7F7F7] fixed top-0 left-0 right-0 w-full z-50 shadow-sm">
        <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-[4%] mx-auto max-w-7xl">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 z-10">
            <img 
              className="h-[45px] xs:h-[55px] sm:h-[65px] md:h-[70px] lg:h-[75px] xl:h-[85px] w-auto" 
              src={coponylogo} 
              alt="logo" 
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex text-[14px] xl:text-[16px] font-medium gap-3 xl:gap-5 items-center">
            {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  className="relative group pb-1 text-[#2a5e91] hover:text-[#1d456a] block transition-colors duration-200 whitespace-nowrap px-2"
                >
                  <span>{t(path)}</span>
                  <span
                    className="absolute bottom-0 left-2 right-2 w-0 h-0.5 bg-[#2a5e91] transition-all duration-200 group-hover:w-[calc(100%-16px)]"
                  ></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="w-[105px] xl:w-[120px] h-[32px] xl:h-[36px] bg-[#4CAF50] text-white text-sm xl:text-base font-normal rounded-[5px]
                flex items-center justify-center hover:bg-[#388E3C] transition duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                {t('get_in_touch')}
              </Link>
            </li>
            <li>
              <select
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-white text-[#337ab7] rounded-[5px] px-2 xl:px-3 py-1 xl:py-1.5 text-sm xl:text-base outline-none border border-gray-300 min-w-[55px] cursor-pointer"
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
              className="bg-white text-[#337ab7] rounded-[5px] px-2 py-1.5 text-sm outline-none border border-gray-300 cursor-pointer"
              value={i18n.language}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-6 h-6 gap-1 p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
              <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
            <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        style={{ top: navbarHeight }}
      />
      
      {/* Mobile/Tablet menu sidebar */}
      <div
        className={`lg:hidden fixed right-0 w-72 sm:w-80 bg-[#F7F7F7] shadow-xl transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ 
          top: navbarHeight, 
          height: `calc(100vh - ${navbarHeight}px)`,
          maxHeight: `calc(100vh - ${navbarHeight}px)`
        }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors relative"
            aria-label="Close menu"
          >
            <span className="block w-5 h-0.5 bg-[#0E1F51] rotate-45 absolute"></span>
            <span className="block w-5 h-0.5 bg-[#0E1F51] -rotate-45 absolute"></span>
          </button>
        </div>

        {/* Menu content with scroll */}
        <div className="px-6 py-4 h-full overflow-y-auto">
          <ul className="flex flex-col gap-1 text-[#0E1F51] font-medium text-base">
            {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  onClick={closeMenu}
                  className="block py-3 px-3 border-b border-gray-100 hover:text-[#2a5e91] hover:bg-gray-50 transition-all duration-200 rounded-lg"
                >
                  {t(path)}
                </Link>
              </li>
            ))}
            
            {/* Mobile Get in Touch button */}
            <li className="mt-6">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-center bg-[#4CAF50] text-white py-3 px-4 rounded-lg hover:bg-[#388E3C] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
              >
                {t('get_in_touch')}
              </Link>
            </li>
            
            {/* Mobile Language selector */}
            <li className="mt-6">
              <label className="block text-sm text-gray-600 mb-2 font-medium">
                {t('language') || 'Language'}
              </label>
              <select
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  closeMenu();
                }}
                className="bg-white text-[#0E1F51] rounded-lg px-3 py-2.5 border border-gray-300 outline-none w-full focus:ring-2 focus:ring-[#2a5e91] focus:border-transparent transition-all cursor-pointer"
                value={i18n.language}
              >
                <option value="uz">🇺🇿</option>
                <option value="ru">🇷🇺 </option>
                <option value="en">🇺🇸 </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}