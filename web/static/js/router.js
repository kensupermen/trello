import Login from './components/Login.vue';
import ListBoard from './components/ListBoard.vue';
import ListCard from './components/ListCard.vue';

export const routes = [
    { name: 'login', path: '/login', component: Login },
    { name: '/', path: '/', component: ListBoard },
    { path: '/boards/:id', component: ListCard }
];
