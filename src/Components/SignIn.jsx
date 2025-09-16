import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAdmin } from '../context/AdminContext';
import logo from '../assets/removelogo.png';
import video from '../assets/video.mp4';
import eye1 from '../assets/eye1.png';
import eye2 from '../assets/eye2.png';

const SignIn = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAdmin();

  const [phoneNumber, setPhoneNumber] = useState('+998');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const isFormValid = phoneNumber.trim().length >= 9 && password.trim().length >= 4;

  useEffect(() => {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('adminActive');
    localStorage.removeItem('username');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const res = await axios.get('https://complex-solution-2.onrender.com/api/admins');
      const admins = res.data;
      const user = admins.find(
        (admin) =>
          admin.phoneNumber === phoneNumber.trim() &&
          admin.password === password.trim()
      );

      if (user) {
        const { fullname, phoneNumber, _id } = user;
        login({ fullname, phoneNumber, _id });
        localStorage.setItem('username', fullname);
        setSuccess(true);
        setTimeout(() => navigate('/main'), 1000);
      } else {
        setError(t('invalidCredentials'));
      }
    } catch (err) {
      console.error(err);
      setError(t('serverError'));
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0E1F51] to-[#243B6B] overflow-hidden">

      {/* Navbar */}
      <div className="absolute top-3 left-3 sm:left-auto sm:right-3 z-30 flex items-center gap-3">
        {/* Mobile menu */}
        <div className="sm:hidden relative">
          <button
            type="button"
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-white text-lg font-bold px-2 py-1 rounded-md shadow-md"
          >
            {showMenu ? '✕' : '☰'}
          </button>
          {showMenu && (
            <div className="absolute top-10 left-0 bg-white rounded-md shadow-lg border border-gray-200 w-36 p-2 z-50 space-y-2">
              <select
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue={i18n.language}
                className="w-full bg-white border border-gray-300 rounded-md px-2 py-1 text-sm text-[#0E1F51]"
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <button
                onClick={() => navigate('/')}
                className="w-full text-left px-2 py-1 text-sm text-[#0E1F51] hover:bg-gray-100 rounded-md"
              >
                ← {t('goBack') || 'Orqaga'}
              </button>
            </div>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex gap-2 sm:gap-3">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-white text-[#0E1F51] border border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm shadow-sm"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button
            onClick={() => navigate('/')}
            className="bg-white text-[#0E1F51] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 transition"
          >
            ← {t('goBack') || 'Orqaga'}
          </button>
        </div>
      </div>

      {/* Video background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0" src={video} />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Login Box */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-5 p-5 sm:p-8 bg-white bg-opacity-60 rounded-xl shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Company Logo" className="w-16 h-16 sm:w-20 sm:h-20 mb-2 object-contain" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E3E5F]">{t('welcome')}</h2>
        </div>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">{t('phoneLabel')}</label>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={t('phonePlaceholder')}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-0 outline-none focus:ring-0 focus:outline-none rounded-md shadow-sm text-xs sm:text-sm"
              required
            />

          </div>

          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">{t('passwordLabel')}</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('passwordPlaceholder')}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border-0  rounded-md pr-10 focus:ring-0 focus:outline-none shadow-sm text-xs sm:text-sm"
                required
              />
              <h2>helo</h2>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2"
              >
                <img src={showPassword ? eye1 : eye2} alt="Toggle password" className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {error && <p className="text-xs sm:text-sm text-red-600 text-center">{error}</p>}
          {success && <p className="text-xs sm:text-sm text-green-600 text-center">{t('successLogin')}</p>}

          <div className="flex justify-end text-xs sm:text-sm">
            <a href="#" className="text-[#0E1F51] hover:underline">{t('forgotPassword')}</a>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold rounded-md text-white shadow transition ${isFormValid ? 'bg-[#2A5E91] hover:bg-[#1E3E5F]' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            {t('signInButton')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
