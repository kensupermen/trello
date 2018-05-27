import Vue from 'vue';
import axios from 'axios';
import { API_URL } from './config';

axios.defaults.baseURL = API_URL;

const ApiService = {
    get(resource, slug = '') {
        return axios.get(resource);
    },

    post(resource, params) {
        return axios.post(resource, params);
    }

}

export default ApiService;

export const AuthService = {
    post(params) {
      return ApiService.post('/sessions', params);
    }
}
