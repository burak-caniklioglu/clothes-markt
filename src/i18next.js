/* eslint-disable no-undef */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'EN',
  lng: 'EN',
  resources: {
    EN: {
      translation: require('./languages/en.json'),
    },
    TR: {
      translation: require('./languages/tr.json'),
    },

  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

i18n.languages = ['EN', 'TR'];
export default i18n;
