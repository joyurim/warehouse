import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../view/main/index.vue'

const routes = [
    {
        path: '/',
        name: 'MainHome',
        component: MainHome,
    },
    {
        path: '/hi',
        component: <div>hi</div>
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
