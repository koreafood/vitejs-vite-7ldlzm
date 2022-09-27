<script>
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Tabulator from './components/Tabulator.vue';
import Setup from './components/Setup.vue';
import Input01 from './components/Input_01.vue';
import RealGrid from './components/RealGrid.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Tabulator,
    Setup,
    Input01,
    RealGrid,
  },
});
</script>

<template>
  <div id="app">
    <!--<img src="@/assets/logo.svg" alt="Vite logo" />-->
    <RealGrid />
    <hr />
    <Input01 />
    <Setup name="abc" />
    <hr />
    <Tabulator />
    <hr />
    <HelloWorld msg="Hello Vue 2 + Vite" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
