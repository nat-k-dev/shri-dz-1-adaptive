import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
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


const LanguageDetectionOptions = {
    // Порядок и список того, откуда приложение узнает о пользовательском языке
    order: ['navigator', 'cookie', 'localStorage'],
   
    // параметры и ключи для поиска языка из вышеуказанных мест
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
   
    // закешировать пользовательский язык тут:
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], 
   
    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',
   
    // fallback to a similar whitelist language
    // Example 1: Browser language is 'es'
    // if 'es' is not found in whitelist, first fallback to any whitelist language that starts with 'es-', then fallback to fallbackLng ('es' -> 'es-*' -> fallbackLng)
    // Example 2: Browser language is 'es-MX'
    // if 'es-MX' is not found in whitelist, first fallback to 'es', then fallback to 'es-*', then fallback to fallbackLng ('es-MX' -> 'es' -> 'es-*' -> fallbackLng)
    checkForSimilarInWhitelist: false,
   
  }

i18next
  .use(initReactI18next) // passes i18n down to react-i18next reactI18nextModule initReactI18next
  .use(LanguageDetector)  
  .init({
    resources,
    lng: navigator.language || navigator.userLanguage,
    fallbackLng: "en",  // use en if detected lng is not available  

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection: LanguageDetectionOptions
  }, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  });

  export default i18next;