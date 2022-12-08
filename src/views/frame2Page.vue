<template>
  <div>
    <h1>frame2Page.vue</h1>
    <div class="app-header">Header</div>
    <div class="app-body">
      <div class="app-side">Sider</div>
      <router-tab :tabs="tabs" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'InitialTabs',
  data() {
    return {
      tabs: [{ to: '/main', title: 'sub_iframe' }],
    };
  },
};
</script>
