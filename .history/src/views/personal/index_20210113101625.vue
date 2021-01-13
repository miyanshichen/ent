<template>
  <div>
    <public-header>
      <router-link to slot="header-r" class="main-text">退出</router-link>
    </public-header>
    <div class="main-bg info mc-text-center mc-flex mc-flex-direction-column mc-items-center">
      <el-avatar :size="50" :src="require('@/assets/image/avator.png')"></el-avatar>
      <span class="mc-size18 mc-bold mc-ml-15 white-text mc-mt-20">迷眼世尘</span>
    </div>
    <el-row :gutter="20" class="mc-p-20">
      <el-col :xs="24" :span="12" class="mc-mb-20">
        <el-card>
          <div class="mc-flex mc-flex-justify-between">
            <span>登录密码</span>
            <span class="mc-cursor-default">重置</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :span="12">
        <el-card>
          <div class="mc-flex mc-flex-justify-between">
            <span>手机号</span>
            <span class="mc-cursor-default">18220642453(已绑定)</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="psdDialog" title="密码重置">
      <el-form :model=""></el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      psdDialog: true
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.info {
  padding: 30px 0;
}
</style>