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
              <span class="mc-cursor-default" @click="psdDialog = true"
                >重置</span
              >
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :span="12">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>交易密码</span>
              <span class="mc-cursor-default" @click="tradeDialog = true"
                >设置</span
              >
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
    <el-dialog
      class="psd-dialog"
      :visible.sync="psdDialog"
      title="登录密码重置"
    >
      <el-form :model="psdForm" ref="psdForm" :rules="psdRules">
        <el-form-item prop="password">
          <mc-input
            title="新密码"
            :val="psdForm.password"
            type="password"
            @input-change="
              (val) => {
                psdForm.password = val;
              }
            "
          ></mc-input>
        </el-form-item>
        <el-form-item prop="password2">
          <mc-input
            title="确认密码"
            :val="psdForm.password2"
            type="password"
            @input-change="
              (val) => {
                psdForm.password2 = val;
              }
            "
          ></mc-input
        ></el-form-item>
        <el-form-item prop="vcode">
          <mc-input
            title="短信验证码"
            :val="psdForm.vcode"
            :code="true"
            @input-change="
              (val) => {
                psdForm.vcode = val;
              }
            "
          ></mc-input
        ></el-form-item>
      </el-form>
      <el-button type="primary" class="mc-w-100" @click="psdSub()">提交</el-button>
    </el-dialog>
    <el-dialog
      class="psd-dialog"
      :visible.sync="tradeDialog"
      title="交易密码设置"
    >
      <el-form :model="tradeForm" :rules="tradeRules" ref="tradeForm">
        <el-form-item>
          <mc-input
            title="密码"
            :val="tradeForm.second_password"
            type="password"
          ></mc-input>
        </el-form-item>
        <el-form-item>
          <mc-input
            title="确认密码"
            :val="tradeForm.second_password2"
            type="password"
          ></mc-input
        ></el-form-item>
        <el-form-item>
          <mc-input
            title="短信验证码"
            :val="tradeForm.code"
            :code="true"
          ></mc-input
        ></el-form-item>
      </el-form>
      <el-button type="primary" class="mc-w-100" @click="tradeSub()">提交</el-button>
    </el-dialog>
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
      // tradeRules: {
      //   second_password: [
      //     { requred: true, validator: second_passwordCheck, trigger: "blur" },
      //   ],
      //   second_password2: [
      //     { requred: true, validator: second_password2Check, trigger: "blur" },
      //   ],
      //   vcode: [{ requred: true, validator: vcodeCheck, trigger: "blur" }],
      // },
      tradeSwitch: true
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    // psdSub() {
    //   this.$refs.psdForm.validate(async valid => {
    //     if (valid) {
    //       if (this.psdSwitch) {
    //         this.psdSwitch = false;
    //         await this.$axios.post(this.$https.api + '/password', this.psdForm).then(res => {
    //           if (res.status === 1) {
    //             this.$message({
    //               message: "登录密码修改成功",
    //               type: 'success'
    //             });
    //             this.psdDialog = false;
    //             this.psdSwitch = false;
    //           }
    //         })
    //       }
    //     }
    //   })
    // },
    
    // tradeSub() {
    //   this.$refs.tradeForm.validate(async valid => {
    //     if (valid) {
    //       if (this.tradeSwitch) {
    //         this.tradeSwitch = false;
    //         await this.$axios.post(this.$https.api + '/second_password', this.tradeForm).then(res => {
    //           if (res.status === 1) {
    //             this.$message({
    //               message: "交易密码修改成功",
    //               type: 'success'
    //             });
    //             this.tradeDialog = false;
    //             this.tradeSwitch = false;
    //           }
    //         })
    //       }
    //     }
    //   })
    // }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.info {
  padding: 30px 0;
}
</style>