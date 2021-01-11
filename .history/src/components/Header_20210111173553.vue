<template>
  <div class="header white-bg">
    <div class="header-container mc-flex mc-items-center mc-h-100">
      <div class="header-l mc-size20 mc-bold">
        <span class="iconfont icon-zuojiantou mc-mr-15"></span>
        <span class="iconfont icon-caidan"></span>
      </div>
      <div class="header-c" ><slot></div>
      <div class="header-r"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
@media only screen and (min-width: 601px) {
  .header {
    height: 64px;
  }
}
@media only screen and (max-width: 601px) {
  .header {
    height: 56px;
  }
}
.header-container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
@media only screen and (min-width: 601px) {
  .header-container{
    width: 85%;
  }
}
@media only screen and (min-width: 993px) {
  .header-container{
    width: 70%;
  }
}
</style>
