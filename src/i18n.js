import { createI18n } from "vue-i18n";

const messages = {
    ko: {
        groom: '신랑',
        
    },
    en: {
        groom: 'Groom'
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'ko',
    fallbackLocale: 'en',
    messages,
})

export default i18n