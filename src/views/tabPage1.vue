<template>
  <div>
    <h1>tabpage1 : src {{ iframeSrc }}</h1>
    <div id="foo" v-on:click="tabOpen">tabOpen</div>
    <page-timer />
    <iframe
      :src="iframeSrc"
      ref="frame"
      @load="load"
      :key="'jotform-iframe-' + jotformSrc"
      name="frame1"
      width="500px"
      height="500px"
      sandbox="allow-scripts allow-popups"
    >
    </iframe>
  </div>
</template>

<script>
import PageTimer from '../components/PageTimer.vue';
export default {
  name: 'PageLeave',
  components: { PageTimer },
  data() {
    return {
      iframeSrc: 'https://test.lalawondan.com/',
      jotformSrc: '1',
    };
  },

  methods: {
    reload() {
      // location.reload();
    },
    load: function () {
      console.log('src', this.$refs.frame.children);
      this.iframeSrc = this.$refs.frame.src;
    },
    tabOpen: function () {
      this.$tabs.openIframe(
        'https://test.lalawondan.com/',
        'iframTab',
        'icon-web'
      );
    },
  },
};
</script>
