import { LOGIN, LOGOUT } from '../actions.type';
import { SET_AUTH } from '../mutations.type';
import ApiService from '.../services/api.service';

const actions = {
    [LOGIN] (context, credentials) {
        return new Promise((reslove) => {
            ApiService.post('', { session: credentials})
                .then(({data}) => {
                    console.log("data = " + data);
                    console.log("router = " + this.$router);
                });
        });
    }
}
