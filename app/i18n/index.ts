import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locale/en.json'
import ru from './locale/ru.json'

const resources = {
    en: { translation: en },
    ru: { translation: ru }
}

if (!i18next.isInitialized) {
    i18next
        .use(initReactI18next)
        .init({
            resources,
            lng: 'en',
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false,
            },
        })
}

export default i18next