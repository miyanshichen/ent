<template>
  <div class="login">
    <div class="form-box">
      <div class="logo mc-size32 white-text mc-text-center">ENT</div>
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
        <el-form-item prop="account"><mc-input :val="loginForm.account" title="账号" @input-change="(val) => {loginForm.account = val}"></mc-input></el-form-item>
        <el-form-item prop="password"
          ><mc-input :val="loginForm.password" title="密码" type="password" @input-change="(val) => {loginForm.password = val}"></mc-input
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
import {mapMutations} from 'vuex'
export default {
  data() {
  let accountCheck = (rule, value, callback) => {
    if (value === "") {
      callback(new Error('用户名不能为空'));
    } else {
      callback();
    }
  }
  let passwordCheck = (rule, value, callback) => {
    if (value === "") {
      callback(new Error('登录密码不能为空'));
    } else {
      callback();
    }
  }
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [{ required: true, validator: accountCheck, trigger: 'blur' }],
        password: [{ required: true, validator: passwordCheck, trigger: 'blur' }]
      },
      loginSwitch: true
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    ...mapMutations({
      SET_USERINFO: 'SET_USERINFO'
    }),

    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          if (this.loginSwitch) {
            this.loginSwitch = false;
            await this.$axios.post(this.$https.api + '/signIn', this.loginForm).then(res => {
              this.loginSwitch = true;
              if (res.status === 1) {
                this.SET_USERINFO(res.data);
                this.$axios.defaults.headers["Authorization"] = "";
              this.$axios.defaults.headers["Authorization"] =
                "Bearer " + res.data.token;
                this.$router.push('/home');
              }
            })
          }
        }
      })
    }
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.login {
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/image/login-bg.png') 100% center no-repeat;
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
