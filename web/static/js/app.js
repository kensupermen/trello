import "phoenix_html";

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App';
import Vuex from 'vuex';

import router from './router.js';
import store from './store';

Vue.config.debug = true
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
