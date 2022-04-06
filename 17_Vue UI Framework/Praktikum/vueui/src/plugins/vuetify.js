import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#FF7F3F', 
            secondary: '#b0bec5',
            third: 'FFFFFF',
            accent: '#F76E11',
            error: '#b71c1c',
          },
        },
      },
});
