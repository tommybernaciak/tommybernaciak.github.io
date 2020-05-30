import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../assets/resource.json';

export const initLang = (): string => {
  const defaultLang = 'en';
  const acceptedLang = ['en', 'pl'];
  const savedLang = window.localStorage.getItem('language');
  if (savedLang && acceptedLang.includes(savedLang)) {
    return savedLang;
  }
  return defaultLang;
};

export const getLang = () => window.localStorage.getItem('language');

export const changeLang = (language: string): void => {
  window.localStorage.setItem('language', language);
  i18n.changeLanguage(language);
};

i18n.use(initReactI18next).init({
  resources,
  lng: initLang(),
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
