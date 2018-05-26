import "phoenix_html";

import Vue from 'vue/dist/vue.js';
import App from './App';
import router from './router.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
