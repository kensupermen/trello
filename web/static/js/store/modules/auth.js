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
    // return new Promise((reslove) => {
    //   ApiService.post('/sessions', { session: credentials})
    //     .then(({data}) => {
    //       console.log("data = " + data.user)
    //       context.commit(SET_AUTH, data.user)
    //       reslove(data)
    //     });
    // });
    return ApiService.post('/sessions', { session: credentials}).then((response) => {
      console.log(response.data.user);
      context.commit(SET_AUTH, response.data.user);
    });
  }
};

const mutations = {
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.first_name);
  }
};

export default {
  state,
  actions,
  mutations
};
