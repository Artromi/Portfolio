import { createI18n } from 'vue-i18n'
import en from './lang/en.json'
import de from './lang/de.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    // message: {
    //   hello: 'hello world!'
    // }
    de: de
  }
})
export default i18n
