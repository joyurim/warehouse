import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MainHome',
        component: () => import(/* webpackChunkName: "MainHome" */ '../views/MainHome.vue'),
    },
    {
        path: '/work',
        component: () => import(/* webpackChunkName: "WorkList" */ '../views/WorkList.vue'),
    },
    {
        path: '/10x10',
        component: () => import(/* webpackChunkName: "TenByTen" */ '../views/TenByTen.vue'),
    },
    {
        path: '/web-design',
        component: () => import(/* webpackChunkName: "WebDesign" */ '../views/WebDesign.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
