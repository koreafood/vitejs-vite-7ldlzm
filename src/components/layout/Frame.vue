<template>
  <div>
    <h1>Frame.vue</h1>
    <div class="app-header">Header</div>

    <div class="app-body">
      <div class="app-side">Sider</div>
      <router-tab
        :tabs="tabs"
        @iframe-mounted="iframeMounted"
        @iframe-loaded="iframeLoaded"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'InitialTabs',
  data() {
    return {
      tabs: [
        { to: '/frame2/tabPage1' },
        { to: '/frame2/tabPage2' },
        `/iframe/${encodeURIComponent(
          'https://cn.vuejs.org'
        )}/Vue.js/rt-icon-web`,
      ],
    };
  },
  methods: {
    iframeMounted(url, iframe) {
      console.log('iframe-mounted:', url, iframe.contentWindow);
    },

    // iframe 内容加载成功
    iframeLoaded(url, iframe) {
      console.log('iframe-loaded:', url, iframe.contentWindow);
    },
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
