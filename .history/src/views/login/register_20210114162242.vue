<template>
  <div class="login">
    <div class="form-box">
      <div class="logo mc-size32 white-text mc-text-center">ENT</div>
      <el-form :model="regForm" ref="regForm" :rules="regRules">
        <el-form-item prop="name"><mc-input :val="regForm.name" title="用户名"></mc-input></el-form-item>
        <el-form-item prop="mobile"><mc-input :val="regForm.mobile" title="手机号"></mc-input></el-form-item>
        <el-form-item prop="rid"><mc-input :val="regForm.rid" title="推荐人"></mc-input></el-form-item>
        <el-form-item prop="password"
          ><mc-input :val="regForm.password" title="密码" type="password"></mc-input
        ></el-form-item>
        <el-form-item prop="password2"
          ><mc-input :val="regForm.password2" title="确认密码" type="password"></mc-input
        ></el-form-item>
        <el-form-item prop="vcode"
          ><mc-input :val="regForm.vcode" title="短信验证码" :code="true"></mc-input
        ></el-form-item>
        <el-button type="primary" class="mc-w-100 mc-mtb-20" @click="register()">注册</el-button>
        <div class="mc-flex mc-flex-justify-between">
          <router-link to="/login" class="white-text">已有账号,去登录</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let nameCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    }
    let mobileCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('手机号不能为空'));
      } else {
        callback();
      }
    }
    let passwordCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('登录密码不能为空'));
      } else if (value.length < 6) {
        callback(new Error('登录密码能少于6位'));
      } else {
        callback();
      }
    }
    let password2Check = (rule, value, callback) => {
      if (this.regForm.password != this.regForm.password2) {
        callback(new Error('两次密码不相同'));
      } else {
        callback();
      }
    }
    let ridCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('推荐人不能为空'));
      } else {
        callback();
      }
    }
    let vcodeCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error('短信验证码不能为空'));
      } else {
        callback();
      }
    }
    return {
      regForm: {
        name: '',
        mobile: '',
        password: '',
        password2: '',
        vcode: '',
        rid: ''
      },
      
      regRules: {
        name: [{required: true, validator: nameCheck, trigger: 'blur'}],
        mobile: [{required: true, validator: mobileCheck, trigger: 'blur'}],
        password: [{required: true, validator: passwordCheck, trigger: 'blur'}],
        password2: [{required: true, validator: password2Check, trigger: 'blur'}],
        vcode: [{required: true, validator: vcodeCheck, trigger: 'blur'}],
        rid: [{required: true, validator: ridCheck, trigger: 'blur'}]
      },
      telReg: /^1[23456789]\d{9}$/,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    register() {
      this.$refs.regForm.validate(async valid => {
        if (async) {
          this.$axios.post()
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
  background: url('~@/assets/image/login-bg.png') center center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: calc(90% - 30px);
    max-width: 500px;
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
