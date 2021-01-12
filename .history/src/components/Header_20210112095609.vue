<template>
  <div class="header white-bg box-shadow">
    <div class="header-container mc-flex mc-items-center mc-h-100 main-text">
      <div class="header-l mc-size20 mc-bold mc-flex-1">
        <span class="iconfont icon-zuojiantou mc-mr-15"></span>
        <span class="iconfont icon-caidan" @click="drawer = true"></span>
      </div>
      <div class="header-c mc-flex-1 mc-text-center">
        <slot name="title"></slot>
      </div>
      <div class="header-r mc-flex-1"></div>
    </div>
    <el-drawer :visible.sync="drawer" direction="ltr" :show-close="false">
      <div slot="title">
        <div class="user-view mc-flex mc-items-center">
          <el-avatar :size="50" :src="require('@/assets/image/avator.png')"></el-avatar>
          <span class="mc-size18 mc-bold mc-ml-15">迷眼世尘</span>
        </div>
      </div>
      <div class="nav-wrap">
        <router-link  to=""></router-link>
      </div>
      
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
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
.header-container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
@media only screen and (min-width: 601px) {
  .header-container {
    width: 85%;
  }
}
@media only screen and (min-width: 993px) {
  .header-container {
    width: 70%;
  }
}
/deep/.el-drawer{
  width: 300px !important;
}
</style>
