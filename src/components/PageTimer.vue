<template>
  <p>
    현재 페이지가 지속된고 있는 시간 :
    <strong class="text-strong">{{ pageTime }}</strong>
  </p>
</template>

<script>
// 页面计时器
export default {
  name: 'PageTimer',

  data() {
    return {
      openTime: new Date(),
      pageTime: 0,
    };
  },

  mounted() {
    this.updatePageTime();
  },

  activated() {
    this.updatePageTime();
  },

  deactivated() {
    this.clearPageTimer();
  },

  beforeDestroy() {
    this.clearPageTimer();
  },

  methods: {
    calcPageTime() {
      this.pageTime = Math.floor((new Date() - this.openTime) / 1000);
    },

    updatePageTime() {
      this.calcPageTime();

      this.clearPageTimer();

      // 定时更新事件
      this.pageTimer = setInterval(this.calcPageTime, 1000);
    },

    clearPageTimer() {
      clearInterval(this.pageTimer);
    },
  },
};
</script>
