import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money',
  },
  {
    path: '/labels',
    name: '标签',
    component: () => import('@/views/Labels.vue'),
    meta: {
      icon: 'discount',
    },
  },
  {
    path: '/money',
    name: '记账',
    component: () => import('@/views/Money.vue'),
    meta: {
      icon: 'dollar',
    },
  },
  {
    path: '/statistics',
    name: '统计',
    component: () => import('@/views/Statistics.vue'),
    meta: {
      icon: 'statistics',
    },
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/NotFoud.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
