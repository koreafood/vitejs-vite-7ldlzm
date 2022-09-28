import Vue from 'vue';
import VueRouter from 'vue-router';
import Table from '../views/table.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', //해쉬값 제거 방식
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('../views/main.vue'),
    },
    {
      path: '/table',
      component: Table,
    },
    {
      path: '/form',
      component: () => import('../views/form.vue'),
    },
    {
      path: '/hello',
      component: () => import('../views/hello.vue'),
    },
  ],
});
