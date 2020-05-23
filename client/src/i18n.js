import i18n from "i18next";
import Backend from 'i18next-locize-backend';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './App.keys.EN.json';
import translationRU from './App.keys.RU.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next reactI18nextModule initReactI18next
  .use(Backend)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",  // use en if detected lng is not available  

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
        projectId: '50beb02a-4432-461b-b0f4-0ffbde75caac',
        apiKey: 'c4543700-7773-4dc2-af5b-fc0aad909812',
        referenceLng: 'en'
      }
  });

  export default i18n;