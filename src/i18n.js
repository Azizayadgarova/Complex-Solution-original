import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uz from './locales/uzb/trans.json';
import en from './locales/eng/trans.json';
import ru from './locales/ru/trans.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uz },
            en: { translation: en },
            ru: { translation: ru },

        },
        lng: 'uz',         // Default til
        fallbackLng: 'en',
        fallbackLng: 'ru', // Agar tarjima topilmasa, ingliz tiliga o'tadi
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
