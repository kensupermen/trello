const ID_TOKEN_KEY = 'trello_token';

export default {
  getToken(token) {
    return localStorage.getItem(ID_TOKEN_KEY, token);
  },
  saveToken(token) {
    return localStorage.setItem(ID_TOKEN_KEY, token);
  },

  destroyToken(token) {
    return localStorage.removeItem(ID_TOKEN_KEY);
  }
}
