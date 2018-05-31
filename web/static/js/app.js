import "phoenix_html";

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './App';
import Vuex from 'vuex';

import router from './router.js';
import store from './store';
import user from './store/modules/user';
import auth from './store/modules/auth';

// Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vuex);

// const store = new Vuex.Store({
//   modules: {
//     user,
//     auth
//   }
// });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
