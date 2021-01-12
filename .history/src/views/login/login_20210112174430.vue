<template>
  <div class="login">
    <div class="form-box">
      <div class="logo mc-size32 white-text mc-text-center">ENT</div>
      <el-form>
        <mc-input title="账号"></mc-input>
        <mc-input title="密码" type="password"></mc-input>
        <el-button type="primary" class="mc-w-100 mc-mtb-15">登录</el-button>
        <div class="mc-flex mc-flex-justify-between ">
          <router-link t></router-link>
        </div>
      </el-form>
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
.login{
  width: 100vw;
  height: 100vh;
  // background: url('~@/assets/image/login-bg.jpg') center center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box{
    width: calc(90% - 30px);
    max-width: 500px;
    padding: 15px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    
  }
}
</style>
