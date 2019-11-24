import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "../assets/resource.json";

export const initLang = (): string | undefined => {
  const savedLang = window.localStorage.getItem("language");
  if (savedLang) {
    return savedLang;
  }

  const browserLang = "en";
  const acceptedLang = ["en", "pl"];
  if (acceptedLang.includes(browserLang)) {
    return browserLang;
  }
};

export const getLang = (state: { language: string }) => state.language;

export const changeLang = (language: string): void => {
  window.localStorage.setItem("language", language);
  i18n.changeLanguage(language);
};

i18n.use(initReactI18next).init({
  resources,
  lng: initLang(),
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
