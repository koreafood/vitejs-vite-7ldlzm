<script>
import { defineComponent } from 'vue';
import foot from './components/foot.vue';
export default defineComponent({
  name: 'App',
  components: {
    foot,
  },
});
</script>

<template>
  <div id="app">
    <router-link to="/main" class="menu">main</router-link>
    <router-link to="/table" class="menu">table</router-link>
    <router-link to="/form" class="menu">form</router-link>
    <router-link to="/hello" class="menu">hello</router-link>
    <router-view></router-view>
    <!--<img src="@/assets/logo.svg" alt="Vite logo" />-->
    <hr />
    <foot name="abc" />
    <hr />
  </div>
</template>

<style>
.menu {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
