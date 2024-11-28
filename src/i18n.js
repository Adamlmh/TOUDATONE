import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // 默认语言
    debug: true,
    interpolation: {
      escapeValue: false, // 不转义 HTML
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 翻译文件路径
    },
  });

export default i18n;
