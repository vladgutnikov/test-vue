import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md',
    },
  }),
  render: (h) => h(App),
}).$mount('#app');
