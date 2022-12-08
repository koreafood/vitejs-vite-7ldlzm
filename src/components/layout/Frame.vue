<template>
  <div>
    <h1>Frame.vue</h1>
    <h2 class="app-header">Header</h2>
    <button id="foo" v-on:click="tabOpen">ifame tab 만들기</button>
    <div class="app-body">
      <router-tab :tabs="tabs" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'InitialTabs',
  data() {
    return {
      tabs: [{ to: '/frame2/tabPage1' }, { to: '/frame2/tabPage2' }],
    };
  },
  methods: {
    tabOpen() {
      this.$tabs.openIframe(
        'https://test.lalawondan.com/',
        'iframTab',
        'icon-web'
      );
    },
  },
};
</script>
/* `/frame2/iframe/${encodeURIComponent( 'https://test.lalawondan.com/'
)}/defaultIframeTab/rt-icon-web`,*/
