import Vue from 'vue';
import VueRouter from 'vue-router';
import TablePage from '../views/tablePage.vue';

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
      component: TablePage,
    },
    {
      path: '/tabulator',
      component: () => import('../views/tabulatorPage.vue'),
    },
    {
      path: '/form',
      component: () => import('../views/formPage.vue'),
    },
    {
      path: '/hello',
      component: () => import('../views/hello.vue'),
    },
    {
      path: '/chart',
      component: () => import('../views/chartPage.vue'),
    },
  ],
});
