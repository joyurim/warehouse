import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MainHome',
        component: () => import(/* webpackChunkName: "MainHome" */ '../views/MainHome.vue'),
    },
    {
        path: '/event',
        component: () => import(/* webpackChunkName: "EventList" */ '../views/EventList.vue'),
    },
    {
        path: '/10x10',
        component: () => import(/* webpackChunkName: "TenByTen" */ '../views/TenByTen.vue'),
    },
    {
        path: '/screen-book',
        component: () => import(/* webpackChunkName: "ScreenDesignBook" */ '../views/ScreenDesignBook.vue'),
    },
    {
        path: '/web-design',
        component: () => import(/* webpackChunkName: "WebDesign" */ '../views/WebDesign.vue'),
    },
    {
        path: '/project',
        component: () => import(/* webpackChunkName: "ProjectList" */ '../views/ProjectList.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
