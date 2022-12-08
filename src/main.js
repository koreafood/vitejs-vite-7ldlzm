import './style.css';
import './realgrid-style.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import VueTabulator from 'vue-tabulator';
import RouterTab from 'vue-router-tab';
import 'vue-router-tab/dist/lib/vue-router-tab.css';
Vue.use(RouterTab);

Vue.use(VueTabulator);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
