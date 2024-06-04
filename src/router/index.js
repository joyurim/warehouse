import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MainHome',
        component: () => import(/* webpackChunkName: "MainHome" */ '../views/main/index.vue'),
    },
    {
        path: '/event',
        component: () => import(/* webpackChunkName: "EventList" */ '../views/event/index.vue'),
    },
    {
        path: '/10x10',
        component: () => import(/* webpackChunkName: "TenByTen" */ '../views/10x10/index.vue'),
    },
    {
        path: '/screen-book',
        component: () => import(/* webpackChunkName: "ScreenDesignBook" */ '../views/screenDesignBook/index.vue'),
    },
    {
        path: '/web-design',
        component: () => import(/* webpackChunkName: "WebDesign" */ '../views/webDesign/index.vue'),
    },
    {
        path: '/project',
        component: () => import(/* webpackChunkName: "ProjectList" */ '../views/projectList/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
