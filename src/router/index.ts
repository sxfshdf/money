import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money',
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import('@/views/Money.vue'),
  },
  {
    path: '/labels',
    name: 'Labels',
    component: () => import('@/views/Labels.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/Statistics.vue'),
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
