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
      <div className="flex items-center justify-between py-4 px-[4%] max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img className="h-[70px] sm:h-[85px] md:h-[95px]" src={coponylogo} alt="logo" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex text-[17px] font-medium gap-6 items-center">
          {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
            <li key={path}>
              <Link
                to={`/${path}`}
                className="relative group pb-1 text-[#2a5e91] hover:text-[#1d456a] block transition-colors"
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
              className="w-[130px] h-[40px] bg-[#4CAF50] text-white font-normal rounded-[5px]
              flex items-center justify-center hover:bg-[#388E3C] transition duration-200 shadow-md hover:shadow-lg"
            >
              {t('get_in_touch')}
            </Link>
          </li>
          <li>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-white text-[#337ab7] rounded-[5px] px-3 py-2 outline-none border border-gray-300"
              value={i18n.language}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>

        {/* Hamburger - mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-transform duration-300 origin-left ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-[#0E1F51] transition-transform duration-300 origin-left ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
      />
      <div
        className={`md:hidden fixed top-0 right-0 w-64 bg-[#F7F7F7] h-full shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <ul className="flex flex-col gap-4 text-[#0E1F51] font-medium text-base">
            {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  onClick={closeMenu}
                  className="block py-2 border-b border-gray-300 hover:text-[#1d456a] transition"
                >
                  {t(path)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-center mt-4 bg-[#4CAF50] text-white py-2 rounded-md hover:bg-[#388E3C] transition"
              >
                {t('get_in_touch')}
              </Link>
            </li>
            <li>
              <select
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  closeMenu();
                }}
                className="bg-white text-[#0E1F51] rounded-[5px] px-3 py-2 border border-gray-300 outline-none w-full mt-4"
                value={i18n.language}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
