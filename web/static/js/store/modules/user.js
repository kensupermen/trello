import { LOGIN, LOGOUT } from '../actions.type';
//import { SET_AUTH } from '../mutations.type';
import ApiService from '../../services/api.service';

const actions = {
    [LOGIN] (context, credentials) {
        return new Promise((reslove) => {
            ApiService.post('/sessions', { session: credentials})
                .then((data) => {
                   reslove(data)
                });
        });
    }
}

export default {
    actions
}