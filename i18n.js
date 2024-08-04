import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./src/locales/en.json";
import translationUK from "./src/locales/uk.json";

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk", // Мова за замовчуванням
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
