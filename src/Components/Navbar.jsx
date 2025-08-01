import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import coponylogo from '../assets/logo.png';

const HOVER_COLOR = 'red';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="bg-[#F7F7F7] fixed top-0 left-0 right-0 w-full z-50 shadow-sm">
            <div className="flex items-center justify-between py-[18px] px-[4%]">
                <div>
                    <Link to="/" onClick={closeMenu}>
                        <img className="h-[95px] outline-none" src={coponylogo} alt="logo" />
                    </Link>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex text-[17px] font-medium gap-[25px] items-center">
                    {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
                        <li key={path}>
                            <Link
                                to={`/${path}`}
                                className={`relative group pb-1 text-[#2a5e91] hover:text-[${HOVER_COLOR}] block`}
                            >
                                <span>{t(path)}</span>
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[${HOVER_COLOR}] transition-all duration-150 group-hover:w-full`}></span>
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
                            className="bg-white text-[#337ab7] rounded-[5px] px-3 py-2 border-white outline-none"
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
                    className="md:hidden flex flex-col justify-center items-center w-5 h-5 gap-1"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-transform duration-300 origin-left ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block w-5 h-0.5 bg-[#0E1F51] transition-transform duration-300 origin-left ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#F7F7F7] px-6 pb-6 border-t border-gray-200 shadow-lg animate-fadeIn">
                    <ul className="flex flex-col gap-3 text-[#0E1F51] font-medium text-sm w-full">
                        {["aboute", "services", "portfolio", "blog", "contact"].map((path) => (
                            <li key={path} className="w-full">
                                <Link
                                    to={`/${path}`}
                                    onClick={closeMenu}
                                    className="block w-full py-2 border-b border-gray-300 hover:text-[#FF3E54] transition"
                                >
                                    {t(path)}
                                </Link>
                            </li>
                        ))}
                        <li className="w-full">
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="w-full block text-center mt-2 bg-[#FF3E54] text-white py-2 rounded-md hover:bg-[#E0344A] transition"
                            >
                                {t('get_in_touch')}
                            </Link>
                        </li>
                        <li className="w-full">
                            <select
                                onChange={(e) => {
                                    i18n.changeLanguage(e.target.value);
                                    closeMenu();
                                }}
                                className="bg-white text-[#0E1F51] rounded-[5px] px-3 py-2 border border-gray-300 outline-none w-full mt-2"
                                value={i18n.language}
                            >
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
