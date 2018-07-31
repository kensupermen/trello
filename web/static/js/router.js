import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';

const routes = [
    { name: 'login', path: '/login', component: Login },
    { name: '/', path: '/', component: Login }
];

export default new VueRouter({
    routes
});
