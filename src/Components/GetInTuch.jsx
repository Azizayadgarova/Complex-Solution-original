import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Using React Icons for the contact details as they are clean and easy to style
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Specific icons from Font Awesome for phone, email, location

// No longer needed for this design:
// import img1 from '../assets/icon1.svg';
// import img2 from '../assets/icon2.svg';
// import img3 from '../assets/icon5.svg';
// import img4 from '../assets/icon6.svg';
// import img5 from '../assets/icon7.svg';
// import img6 from '../assets/icon9.svg';
// import img from '../assets/icon.svg';
// import contactImage from '../assets/contact.jpg'; // No background image in this design

const GetInTuch = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '', // Back to a single name field
    phone: '', // Phone field is back
    email: '',
    message: '',
    privacyAccepted: false, // Privacy checkbox is back
  });

  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; // Re-introduced type and checked for checkbox
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
      alert(t('please_accept_privacy_policy')); // Use translation for alert
      return;
    }

    const isSent = await sendToTelegram();
    if (isSent) {
      setFormData({ name: '', phone: '', email: '', message: '', privacyAccepted: false });
      setShowThankYouModal(true);
    } else {
      alert(t('message_not_sent_try_again')); // Use translation for alert
    }
  };

  const handleModalClose = () => {
    setShowThankYouModal(false);
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-white"> {/* White background for the whole section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start"> {/* Align items to start */}
        {/* Left Section: Text and Contact Info */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#292D32] mb-6 "> {/* Dark text color from image */}
            {t('lets_talk')} {/* New Russian translation key */}
          </h2>
          <p className="text-[#686868] text-base mb-4"> {/* Grey text color from image */}
            {t('call_anytime')} {/* New Russian translation key */}
          </p>
          <p className="text-[#686868] text-base mb-12"> {/* Grey text color from image */}
            {t('our_specialists_will_contact_you')} {/* New Russian translation key */}
          </p>

          <div className="space-y-6"> {/* Spacing for contact details */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#6A66FF] text-xl" /> {/* Blue/purple phone icon */}
              <a href="tel:+998945160050" className="text-[#686868] text-lg hover:underline"> {/* Grey text, matching image */}
                +998 94 516 00 50 {/* Phone number from image */}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#6A66FF] text-xl" /> {/* Blue/purple email icon */}
              <a href="mailto:info.exadot@gmail.com" className="text-[#686868] text-lg hover:underline"> {/* Grey text, matching image */}
                info.exadot@gmail.com {/* Email from image */}
              </a>
            </div>
            <div className="flex items-start gap-4"> {/* Use items-start for multiline address */}
              <FaMapMarkerAlt className="text-[#6A66FF] text-xl mt-1" /> {/* Blue/purple location icon, slightly offset */}
              <p className="text-[#686868] text-lg"> {/* Grey text, matching image */}
                Ташкент, ул.Лабзак 64А, 100128 {/* Address from image */}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 p-8 md:p-10 rounded-xl bg-white shadow-xl"> {/* White background, added shadow for depth */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input fields */}
            {['name', 'phone', 'email', 'message'].map((field) => (
              <div key={field}>
                {field === 'message' ? (
                  <textarea
                    name={field}
                    rows="5"
                    placeholder={t(field === 'name' ? 'name_placeholder_ru' : field === 'phone' ? 'phone_placeholder_ru' : field === 'email' ? 'email_placeholder_ru' : 'message_placeholder_ru')} // Specific Russian placeholders
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full text-base bg-[#F7F7F7] px-5 py-3 rounded-md text-[#292D32] placeholder-[#B5B5B5] border border-[#E0E0E0] focus:outline-none focus:border-[#6A66FF] focus:ring-0 transition duration-200" // Light grey background, subtle border, matching colors
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    placeholder={t(field === 'name' ? 'name_placeholder_ru' : field === 'phone' ? 'phone_placeholder_ru' : 'email_placeholder_ru')} // Specific Russian placeholders
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full text-base bg-[#F7F7F7] px-5 py-3 rounded-md text-[#292D32] placeholder-[#B5B5B5] border border-[#E0E0E0] focus:outline-none focus:border-[#6A66FF] focus:ring-0 transition duration-200" // Light grey background, subtle border, matching colors
                    required
                  />
                )}
              </div>
            ))}

            {/* Privacy policy checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
                className="w-4 h-4 text-[#6A66FF] border-[#6A66FF] rounded focus:ring-0 focus:ring-offset-0" // Blue/purple checkbox, no ring
                style={{ backgroundColor: formData.privacyAccepted ? '#6A66FF' : 'white', borderColor: '#6A66FF' }} // Custom background for checked state
              />
              <label htmlFor="privacyAccepted" className="text-[#686868] text-sm"> {/* Grey text */}
                {t('i_agree_to_accept')}{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6A66FF] underline" // Blue/purple underline link
                >
                  {t('privacy_policy_long')} {/* New Russian translation key for "Privacy Policy" */}
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6A66FF] text-white font-semibold py-3 px-6 rounded-md
                         hover:bg-[#5A56D9] transition duration-300 shadow-md focus:outline-none focus:ring-0" // Blue/purple button, no ring
            >
              {t('contact_us')} {/* New Russian translation key */}
            </button>
          </form>
        </div>
      </div>

      {/* Thank You Modal - Styling adjusted for this design */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-8 shadow-2xl text-center max-w-sm w-full transform transition-all scale-100 animate-fade-in-up">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#E8E8FF] flex items-center justify-center"> {/* Light blue/purple background */}
                <svg
                  className="w-12 h-12 text-[#6A66FF]" // Blue/purple checkmark
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{t('thank_you_title')}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">{t('thank_you_message')}</p>
            <button
              onClick={handleModalClose}
              className="px-6 py-3 bg-[#6A66FF] text-white text-sm sm:text-base rounded-md shadow-md transition duration-300 hover:bg-[#5A56D9] focus:ring-0"
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