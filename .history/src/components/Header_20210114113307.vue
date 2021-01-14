<template>
  <div class="header white-bg box-shadow">
    <div class="container mc-flex mc-items-center mc-h-100 main-text">
      <div class="header-l mc-size20 mc-bold mc-flex-1">
        <span class="iconfont icon-zuojiantou mc-mr-15"></span>
        <span class="iconfont icon-caidan" @click="drawer = true"></span>
      </div>
      <div class="header-c mc-flex-1 mc-text-center">{{headerText}}
        <!-- <slot name="title"></slot> -->
      </div>
      <div class="header-r mc-flex-1 mc-text-right"><slot name="header-r"></slot></div>
    </div>
    <el-drawer :visible.sync="drawer" direction="ltr" :show-close="false">
      <div slot="title">
        <div class="user-view mc-flex mc-items-center">
          <el-avatar :size="50" :src="require('@/assets/image/avator.png')"></el-avatar>
          <span class="mc-size18 mc-bold mc-ml-15">迷眼世尘</span>
        </div>
      </div>
      <div class="nav-wrap">
        <router-link  to="/">
          <span class="iconfont icon-shouye mc-size20"></span>
          <span class="nav-text mc-bold">首页</span>
          <span class="iconfont icon-youjiantou"></span>
        </router-link>
        <router-link  to="/finance/assets">
          <span class="iconfont icon-wodezichan mc-size20"></span>
          <span class="nav-text mc-bold">我的资产</span>
          <span class="iconfont icon-youjiantou"></span>
        </router-link>
        <router-link  to="/finance/trans">
          <span class="iconfont icon-zhuanhuan-transformation mc-size20"></span>
          <span class="nav-text mc-bold">互转</span>
          <span class="iconfont icon-youjiantou"></span>
        </router-link>
        <router-link  to="/team">
          <span class="iconfont icon-tuandui mc-size20"></span>
          <span class="nav-text mc-bold">我的团队</span>
          <span class="iconfont icon-youjiantou"></span>
        </router-link>
        <router-link  to="/personal/index">
          <span class="iconfont icon-gerenzhongxin mc-size20"></span>
          <span class="nav-text mc-bold">个人中心</span>
          <span class="iconfont icon-youjiantou"></span>
        </router-link>
      </div>
      
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      default: 'ENT'
    }
  },
  data() {
    return {
      drawer: false,
    };
  },

  components: {},

  computed: {},

  mounted() {},

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
/deep/.el-drawer{
  width: 300px !important;
  .nav-wrap{
    a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 48px;
      line-height: 48px;
      color: @main;
      transition: all linear .2s;
      &:hover{
        background: @f5;
      }
      span.nav-text{
        flex: 1;
        margin-left: 15px;
      }
    }
  }
}
</style>
