import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';

const routes = [
    { path: '/login', component: Login }
];

export default new VueRouter({
    routes
});
