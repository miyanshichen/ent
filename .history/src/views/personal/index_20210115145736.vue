<template>
  <div>
    <public-header>
      <router-link to slot="header-r" class="main-text">退出</router-link>
    </public-header>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    let passwordCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("新密码不能为空"));
      } else if (value.length < 6) {
        callback(new Error("登录密码不能少于6位"));
      } else {
        callback();
      }
    };
    let password2Check = (rule, value,callback) => {
      if (this.psdForm.password !== this.psdForm.password2) {
        callback(new Error("两次密码不相同"));
      } else {
        callback();
      }
    }
    let vcodeCheck = (rule, value,callback) => {
      if (value === "") {
        callback(new Error("短信验证码不能为空"));
      } else {
        callback();
      }
    }
    let second_passwordCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("交易密码不能为空"));
      } else if (!/^\d{6}$/.test(value)) {
        callback(new Error("交易密码为6位纯数字"));
      } else {
        callback();
      }
    };
    let second_password2Check = (rule, value, callback) => {
      if (this.second_passwordCheck !== this.second_password2Check) {
        callback(new Error("两次密码不相同"));
      } else {
        callback();
      }
    };
    return {
      psdDialog: false,
      tradeDialog: false,
      psdForm: {
        password: "",
        password2: "",
        vcode: "",
      },
      psdRules: {
        password: [
          { requred: true, validator: passwordCheck, trigger: "blur" },
        ],
        password2: [
          { requred: true, validator: password2Check, trigger: "blur" },
        ],
        vcode: [{ requred: true, validator: vcodeCheck, trigger: "blur" }],
      },
      psdSwitch: true,
      tradeForm: {
        second_password: "",
        second_password2: "",
        vcode: "",
      },
      tradeRules: {
        second_password: [
          { requred: true, validator: second_passwordCheck, trigger: "blur" },
        ],
        second_password2: [
          { requred: true, validator: second_password2Check, trigger: "blur" },
        ],
        vcode: [{ requred: true, validator: vcodeCheck, trigger: "blur" }],
      },
      tradeSwitch: true
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    psdSub() {
      this.$refs.psdForm.validate(async valid => {
        if (valid) {
          if (this.psdSwitch) {
            this.psdSwitch = false;
            await this.$axios.post(this.$https.api + '/password', this.psdForm).then(res => {
              if (res.status === 1) {
                this.$message({
                  message: "登录密码修改成功",
                  type: 'success'
                });
                this.psdDialog = false;
                this.psdSwitch = false;
              }
            })
          }
        }
      })
    },
    
    tradeSub() {
      this.$refs.tradeForm.validate(async valid => {
        if (valid) {
          if (this.tradeSwitch) {
            this.tradeSwitch = false;
            await this.$axios.post(this.$https.api + '/second_password', this.tradeForm).then(res => {
              if (res.status === 1) {
                this.$message({
                  message: "交易密码修改成功",
                  type: 'success'
                });
                this.tradeDialog = false;
                this.tradeSwitch = false;
              }
            })
          }
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.info {
  padding: 30px 0;
}
</style>