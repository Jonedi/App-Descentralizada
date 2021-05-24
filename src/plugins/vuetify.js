import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#00000F',
        secondary: '#CCA70A',
        accent: '#C0C0C0',
        error: '#2A002B',
        info: '#F4CE2C',
        success: '#00AAFF',
        warning: '#606060'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'fa',
  },
});
