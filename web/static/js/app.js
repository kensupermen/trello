import "phoenix_html";

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App';
import Vuex from 'vuex';

import routes from './router.js';
import store from './store';
import user from './store/modules/user';
import auth from './store/modules/auth';
import socket from './services/socket';

// Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
