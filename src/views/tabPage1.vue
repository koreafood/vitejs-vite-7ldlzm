<template>
  <div>
    <h1>tabpage1 : iframe src {{ iframeSrc }}</h1>
    <h2>탭 내부에서 iframe을 가지고 있는 형태</h2>
    <h2>iframe내의 bbb를 클릭하여 화면을 bbb로 전환후</h2>
    <h2>
      다른 탭을 갔다가 오면 현재 vue페이지가 다시보이지만 내부의 iframe은 주소는
      초기화됨
    </h2>
    <page-timer />
    <iframe
      :src="iframeSrc"
      ref="frame"
      @load="load"
      name="frame1"
      width="500px"
      height="500px"
      sandbox="allow-scripts allow-popups"
      style="border-width: 1px; border-color: red; border-style: solid"
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
    load: function () {
      this.iframeSrc = this.$refs.frame.src;
    },
    tabOpen: function () {
      /*tab내부에서 다른탭을 부를 떄 사용가능*/
      this.$tabs.openIframe(
        'https://test.lalawondan.com/',
        'iframTab',
        'icon-web'
      );
    },
  },
};
</script>
