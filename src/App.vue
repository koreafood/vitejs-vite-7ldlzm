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
    <router-link to="/tabulator" class="menu">tabulator</router-link>
    <router-link to="/form" class="menu">form</router-link>
    <router-link to="/hello" class="menu">hello</router-link>
    <router-link to="/chart" class="menu">chart</router-link>
    <router-link to="/tree" class="menu">tree</router-link>
    <router-link to="/frame1" class="menu">iframe</router-link>
    <router-link to="/frame2" class="menu">vueTab Test</router-link>
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
</style>
