import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import auth from './modules/auth';

import { LOGIN, LOGOUT } from './actions.type';
import { SET_AUTH } from './mutations.type';
import ApiService from '../services/api.service';
import JwtService from '../services/jwt.service';

export default new Vuex.Store({
    // modules: {
      // user,
      // auth
    // }

  state: {
    errors: {},
    user: {},
    // isAuthenticated: !!JwtService.getToken()
    isAuthenticated: false
  },

  actions: {
    [LOGIN] (context, credentials) {
      return ApiService.post('/sessions', { session: credentials}).then((response) => {
        console.log(response.data.user);
        context.commit(SET_AUTH, response.data.user);
      });
    }
  },

  mutations: {
    [SET_AUTH](state, user) {
      state.isAuthenticated = true;
      state.user = user;
      state.errors = {};
      JwtService.saveToken(state.user.email);
    }
  }

});
