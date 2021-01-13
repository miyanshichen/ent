<template>
  <div>
    <public-header></public-header>
    <div class="mc-p-15">
      <div class="mc-flex">
        <el-button type="primary mc-flex-1 mc-mr-15">
          <div class="mc-flex mc-items-center mc-flex-justify-center">
            <span
              class="iconfont icon-Icon-zhuanru mc-size18 white-text mc-mr-10"
            ></span>
            充币
          </div></el-button
        >
        <el-button type="primary mc-flex-1 mc-mr-15">
          <div class="mc-flex mc-items-center mc-flex-justify-center">
            <span
              class="iconfont icon-Icon-zhuanru mc-size18 white-text mc-mr-10"
            ></span>
            充币
          </div></el-button
        >
        <el-button type="success mc-flex-1 iconfont icon-Icon-zhuanchu"
          >提币</el-button
        >
      </div>
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

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
