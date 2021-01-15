<template>
  <div>
    <public-header>
      <router-link to slot="header-r" class="main-text">退出</router-link>
    </public-header>
    <div
      class="main-bg info mc-text-center mc-flex mc-flex-direction-column mc-items-center"
    >
      <el-avatar
        :size="50"
        :src="require('@/assets/image/avator.png')"
      ></el-avatar>
      <span class="mc-size18 mc-bold mc-ml-15 white-text mc-mt-20"
        >迷眼世尘</span
      >
    </div>
    <div class="mc-p-20">
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
        <el-col :xs="24" :span="12" class="mc-mb-20">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>语言</span>
              <span class="mc-cursor-default"></span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-dialog class="psd-dialog" :visible.sync="psdDialog" title="登录密码重置">
      <el-form :model="psdForm">
        <el-form-item>
          <mc-input
            title="新密码"
            :val="psdForm.password"
            type="password"
          ></mc-input>
        </el-form-item>
        <el-form-item>
          <mc-input
            title="确认密码"
            :val="psdForm.password2"
            type="password"
          ></mc-input
        ></el-form-item>
        <el-form-item>
          <mc-input title="短信验证码" :val="psdForm.vcode" :code="true"></mc-input
        ></el-form-item>
      </el-form>
      <el-button type="primary" class="mc-w-100">提交</el-button>
    </el-dialog>
    <el-dialog class="psd-dialog" :visible.sync="tradeDialog" title="交易密码设置">
      <el-form :model="psdForm">
        <el-form-item>
          <mc-input
            title="密码"
            :val="tradeForm.password"
            type="password"
          ></mc-input>
        </el-form-item>
        <el-form-item>
          <mc-input
            title="确认密码"
            :val="tradeForm.password2"
            type="password"
          ></mc-input
        ></el-form-item>
        <el-form-item>
          <mc-input title="短信验证码" :val="tradeForm.code" :code="true"></mc-input
        ></el-form-item>
      </el-form>
      <el-button type="primary" class="mc-w-100">提交</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      psdDialog: false,
      tradeDialog: false,
      psdForm: {
        password: "",
        password2: "",
        code: "",
      },
      tradeForm: {
        password: "",
        password2: "",
        code: "",
      },
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.info {
  padding: 30px 0;
}
</style>