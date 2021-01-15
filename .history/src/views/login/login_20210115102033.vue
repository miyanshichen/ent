<template>
  <div class="login">
    <div class="form-box">
      <div class="logo mc-size32 white-text mc-text-center">ENT</div>
      <el-form :model="loginForm" >
        <el-form-item><mc-input :val="loginForm.account" title="账号"></mc-input></el-form-item>
        <el-form-item
          ><mc-input :val="loginForm.password" title="密码" type="password"></mc-input
        ></el-form-item>
        <el-button type="primary" class="mc-w-100 mc-mtb-20" @click="login()">登录</el-button>
        <div class="mc-flex mc-flex-justify-between">
          <router-link to="/register" class="white-text">注册</router-link>
          <router-link to="/findpsd" class="white-text">忘记密码？</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    login() {
      this.$router.push('/home')
    }
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.login {
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/image/login-bg.png') center center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: calc(90% - 30px);
    max-width: 450px;
    padding: 15px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    .logo{
      margin-bottom: 30px;
    }
    /deep/.el-form{
      .input-label, .eye{
        color: @white;
      }
      .el-input__inner{
        color: @white;
        border-color: @white;
      }
    }
  }
}
</style>
