import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      English: {
        translation: {
            "Navbar": "../data/en/navbar.json",
            "AboutUs": "../../../data/en/aboutus.json",
            "Footer": "Plantify 2023. All rights reserved. [Completed for SEG 3125]",
            "Email": "customer-service@plantify.com"
        }
      },
      Latin: {
        translation: {
            "Navbar": "../data/la/navbar.json",
            "AboutUs": "../../../data/la/aboutus.json",
            "Footer": "Plantify 2023. Omnia iura reservata. [Completum pro SEG 3125].",
            "Email": "mos-muneris@plantify.com"
        }
      }
    },
    lng: "English", // if you're using a language detector, do not define the lng option
    fallbackLng: "English",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });



export default i18n;  