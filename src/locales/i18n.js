import enUS from './en_US.js'
import frFR from './fr_FR'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import jaJP from './ja_JP'
import zhCN from './zh_CN'
import zhHK from './zh_HK'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en_US: enUS,
    fr_FR: frFR,
    zh_CN: zhCN,
    zh_HK: zhHK,
    ja_JP: jaJP
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en_US',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n
