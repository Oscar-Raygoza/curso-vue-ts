import type { VuetifyParsedTheme } from 'vuetify/types/services/theme';
import Vuetify from 'vuetify/lib/framework';
import Vue from 'vue';

import '@mdi/font/css/materialdesignicons.css';
import '@/assets/sass/main.scss';


/*
// Locale
import i18n from './i18n';
import ja from 'vuetify/es5/locale/ja';
import en from 'vuetify/es5/locale/en';
*/


Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  /*
  lang: {
    current: navigator.language,
    locales: { ja, en },
    t: (key, ...params) => i18n.t(key, params) as string,
  },
*/
theme: {
  dark: false,
  default: 'dark',
  disable: false,
  options: {
    customProperties: true,
  },
  themes: {
    light: {
      primary: '#274c69',
      secondary: '#424242',
      accent: '#43B4B4',
      error: '#C62828',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107',
      blue_secondary: '#C62828',
      ambar: '#FF8F00',
      //blue_secondary: '#43B4B4',
      aqua: '#43B4B4',
    },
    dark: {
      secundary: '#29B45B',
      danger: '#FF4115',
      primary: '#2E3841',
      warning: '#FF9C00',
      orange: '#FEA00E',
      success: '#00A73C',
    },
  },
},
lang: {
  current: 'es',
},
});