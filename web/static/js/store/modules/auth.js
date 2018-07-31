import { LOGIN, LOGOUT } from '../actions.type';
import { SET_AUTH } from '../mutations.type';
import ApiService from '../../services/api.service';
import JwtService from '../../services/jwt.service';

const state = {
  errors: {},
  user: {},
  // isAuthenticated: !!JwtService.getToken()
  isAuthenticated: false
};

// const getters = {
//   currentUser(state) {
//     console.log("getter state: " + state);
//     return state;
//   },
//   isAuthenticated(state) {
//     console.log("getter isAuthenticated: " + state);
//     return state;
//   }
// };

const actions = {
  [LOGIN] (context, credentials) {
    return ApiService.post('/sessions', { session: credentials}).then((response) => {
      context.commit(SET_AUTH, response.data);
    });
  }
};

const mutations = {
  [SET_AUTH] (state, data) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.errors = {};
    JwtService.saveToken(data.jwt);
  }
};

export default {
  state,
  actions,
  mutations
};
