import i18n from 'i18next';
import { ru, en, ua } from './resources';

i18n.init({
  lng: 'ru',
  debug: process.env.NODE_ENV !== 'production',
  resources: {
    ru,
    en,
    ua,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
