import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import ListBoard from './components/ListBoard.vue';
import ListCard from './components/ListCard.vue';

const routes = [
    { name: 'login', path: '/login', component: Login },
    { name: '/', path: '/', component: ListBoard },
    { path: '/boards/:id', component: ListCard }
];

export default new VueRouter({
    // mode: 'history',
    routes
});