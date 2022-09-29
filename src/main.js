import './style.css';
import './realgrid-style.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
