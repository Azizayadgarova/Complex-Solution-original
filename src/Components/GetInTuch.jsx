
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const GetInTuch = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });

  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const sendToTelegram = async () => {
    const token = '8040160776:AAHodRvx_Tpb7VJuQT8ES-IEjQkLY0NnSBA';
    const chatId = '6304612170';
    const text = `
📥 Yangi murojaat!
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
📧 Email: ${formData.email}
💬 Xabar: ${formData.message}
✅ Maxfiylik siyosati qabul qilindi: ${formData.privacyAccepted ? 'Ha' : 'Yo‘q'}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      return res.ok;
    } catch (err) {
      console.error('Telegram error:', err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      alert(t('please_accept_privacy_policy'));
      return;
    }

    const isSent = await sendToTelegram();
    if (isSent) {
      setFormData({ name: '', phone: '', email: '', message: '', privacyAccepted: false });
      setShowThankYouModal(true);
    } else {
      alert(t('message_not_sent_try_again'));
    }
  };

  const handleModalClose = () => {
    setShowThankYouModal(false);
  };

  return (
    <div className="py-20 px-4 sm:px-[4%] md:px-[4%] lg:px-[6%] bg-[#F7F7F7] ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        {/* Contact Info */}
        <div className="lg:w-1/2 text-left mt-[100px]">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2a5e91] mb-6">
            {t('hello')} ! <span className="font-normal text-[#292D32]">{t('lets_talk')}</span>
          </h2>
          <p className="text-[#686868] text-base">{t('call_anytime')}</p>
          <p className="text-[#686868] text-base mb-12">{t('thank_you_message')}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#2a5e91] text-2xl" />
              <div>
                <p className="text-[#686868] text-sm">{t('phone')}</p>
                <a href="tel:+998945160050" className="text-[#686868] text-sm hover:underline">
                  +998 (91) 166-90-99
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#2a5e91] text-2xl" />
              <div>
                <p className="text-[#686868] text-sm">{t('email')}</p>
                <a href="mailto:info.exadot@gmail.com" className="text-[#686868] text-sm hover:underline">
                 uzcomplex-solutions@mail.ru
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#2a5e91] text-2xl mt-1" />
              <div>
                <p className="text-[#686868] text-sm">{t('visit_us')}</p>
                <p className="text-[#686868] text-sm">Ташкентский район, ул. ТКАД, д. 30</p>
              </div>
            </div>
          </div>
        </div>

{/* Form */}
        <div className="lg:w-1/2 p-8 md:p-8 rounded-[35px] bg-white shadow-xl font-sans">
          <form onSubmit={handleSubmit} className="space-y-6 p-2 rounded-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">
                {t('name')}
              </label>
              <input
                type="text"
                name="name"
                placeholder={t('name')}
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-100 text-base px-4 py-2 rounded-xl text-gray-800 placeholder-gray-400 border border-transparent focus:outline-none focus:border-gray-300 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-2">
                {t('phone')}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder={t('phone')}
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-100 text-base px-4 py-2 rounded-xl text-gray-800 placeholder-gray-400 border border-transparent focus:outline-none focus:border-gray-300 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@name.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 text-base px-4 py-2 rounded-xl text-gray-800 placeholder-gray-400 border border-transparent focus:outline-none focus:border-gray-300 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">
                {t('message')}
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder={t('message')}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-100 text-base px-5 py-3 rounded-xl text-gray-800 placeholder-gray-400 border border-transparent focus:outline-none focus:border-gray-300 transition duration-200"
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
                className="w-4 h-4 text-blue-600 rounded focus:ring-0"
              />
              <label htmlFor="privacyAccepted" className="text-gray-600 text-sm">
                {t('privacy_policy_agree')}
               
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-[#4875a3] hover:bg-[#2a5e91] text-white font-semibold py-3 rounded-full transition duration-300 mt-8"
            >
              <div className="bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2a5e91]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span>{t('get_in_touch')}</span>
            </button>
          </form>
        </div>
      </div>
{/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-8 shadow-2xl text-center max-w-sm w-full transform transition-all scale-100 animate-fade-in-up">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#E8E8FF] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#6A66FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{t('thank_you_title')}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">{t('thank_you_message')}</p>
            <button
              onClick={handleModalClose}
              className="px-6 py-3 bg-[#2a5e91] text-white text-sm sm:text-base rounded-md shadow-md transition duration-300 hover:bg-[#2a5e91] focus:ring-0"
            >
              {t('ok_button')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInTuch;