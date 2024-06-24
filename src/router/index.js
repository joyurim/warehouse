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
        children: [
            {
                path: 'category',
                name: 'TenByTenCategory',
                component: () => import(/* webpackChunkName: "TenByTenCategory" */ '@/components/10x10/main/TenByTenCategory.vue'),
            },
            {
                path: 'mypage',
                name: 'TenByTenMyPage',
                component: () => import(/* webpackChunkName: "TenByTenMyPage" */ '@/components/10x10/main/TenByTenMyPage.vue'),
            },
            {
                path: '',
                name: 'TenByTenMain',
                component: () => import(/* webpackChunkName: "TenByTenMain" */ '@/components/10x10/main/TenByTenMain.vue'),
            },
            {
                path: 'wish',
                name: 'TenByTenWish',
                component: () => import(/* webpackChunkName: "TenByTenWish" */ '@/components/10x10/main/TenByTenWish.vue'),
            },
            {
                path: 'history',
                name: 'TenByTenHistory',
                component: () => import(/* webpackChunkName: "TenByTenHistory" */ '@/components/10x10/main/TenByTenHistory.vue'),
            }
        ]
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
