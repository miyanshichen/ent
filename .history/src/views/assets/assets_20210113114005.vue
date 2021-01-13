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
        <el-button type="success mc-flex-1">
          <div class="mc-flex mc-items-center mc-flex-justify-center">
            <span
              class="iconfont icon-Icon-zhuanchu mc-size18 white-text mc-mr-10"
            ></span>
            提币
          </div></el-button
        >
      </div>
      
      <el-row :gutter="20">
        <el-col :xs="24" :span="12" class="mc-mb-20">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>手机号</span>
              <span class="mc-cursor-default">18220642453(已绑定)</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :span="12" class="mc-mb-20">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>登录密码</span>
              <span class="mc-cursor-default" @click="psdDialog = true">重置</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :span="12">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>交易密码</span>
              <span class="mc-cursor-default" @click="tradeDialog = true">设置</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
