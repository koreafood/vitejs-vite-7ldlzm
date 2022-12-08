import Vue from 'vue';
import VueRouter from 'vue-router';
import TablePage from '../views/tablePage.vue';

import { RouterTabRoutes } from 'vue-router-tab';
import 'vue-router-tab/dist/lib/vue-router-tab.css';
// layout component
import Frame from '../components/layout/Frame.vue';
// lazy load
const importPage = (view) => () =>
  import(/* webpackChunkName: "p-[request]" */ `../views/${view}.vue`);

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
    {
      path: '/tree',
      component: () => import('../views/treePage.vue'),
    },
    {
      path: '/frame1',
      component: () => import('../views/frame1Page.vue'),
    },

    {
      path: '/frame2',
      //component: () => import('../views/frame2Page.vue'),
      component: Frame,
      children: [
        // integrate RouterTabRoutes to support iframe tabs
        ...RouterTabRoutes,
        {
          path: '/frame2/tabPage1', // the same with parent route
          name: 'tabPage1',
          component: importPage('tabPage1'),
          meta: {
            key: '123',
            title: 'tabPage1',
            reuse: true,
          },
        },
        {
          path: '/frame2/tabPage2', // the same with parent route
          name: 'tabPage2',
          component: importPage('tabPage2'),
          meta: {
            key: '456',
            title: 'tabPage2',
          },
        },
        {
          path: '/frame2/page/:id',
          component: importPage('Page'),
          meta: {
            title: 'Page', // tab title
            icon: 'icon-user', // tab icon, optional
            tabClass: 'custom-tab', // custom class, optional
            tips: 'This is a tab', // tab tooltip, optional. defaults to `meta.title`
            key: 'path', // tab cache rule, optional
            closable: false, // is tab closable, defaults to `true`
          },
        },
      ],
    },
  ],
});
