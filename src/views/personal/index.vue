<template>
  <div>
    <public-header>
      <div to slot="header-r" class="main-text mc-cursor-default" @click="logOut()">退出</div>
    </public-header>
    <div class="main-bg info mc-text-center mc-flex mc-flex-direction-column mc-items-center">
      <el-avatar :size="50" :src="require('@/assets/image/avator.png')"></el-avatar>
      <span class="mc-size18 mc-bold mc-ml-15 white-text mc-mt-20">迷眼世尘</span>
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
        <el-col :xs="24" :span="12" class="mc-mb-20">
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
              <span class="mc-cursor-default" @click="langDialog = true">{{$t('view.setting')}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-dialog class="psd-dialog" :visible.sync="psdDialog" title="登录密码重置">
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
          ></mc-input>
        </el-form-item>
        <el-form-item prop="vcode">
          <mc-input
            :mobile="userInfo.mobile"
            title="短信验证码"
            :val="psdForm.vcode"
            :code="true"
            @input-change="
              (val) => {
                psdForm.vcode = val;
              }
            "
          ></mc-input>
        </el-form-item>
      </el-form>
      <div class="mc-flex mc-mt-20">
        <el-button type="info" class="mc-flex-1 mc-mr-20" @click="psdDialog = false">取消</el-button>
        <el-button type="primary" class="mc-flex-1" @click="psdSub()">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog class="psd-dialog" :visible.sync="tradeDialog" title="交易密码设置">
      <el-form :model="tradeForm" :rules="tradeRules" ref="tradeForm">
        <el-form-item prop="second_password">
          <mc-input
            title="密码"
            :val="tradeForm.second_password"
            @input-change="
              (val) => {
                tradeForm.second_password = val;
              }
            "
            type="password"
          ></mc-input>
        </el-form-item>
        <el-form-item prop="second_password2">
          <mc-input
            title="确认密码"
            :val="tradeForm.second_password2"
            @input-change="
              (val) => {
                tradeForm.second_password2 = val;
              }
            "
            type="password"
          ></mc-input>
        </el-form-item>
        <el-form-item prop="vcode">
          <mc-input
            :mobile="userInfo.mobile"
            title="短信验证码"
            :val="tradeForm.vcode"
            @input-change="
              (val) => {
                tradeForm.vcode = val;
              }
            "
            :code="true"
          ></mc-input>
        </el-form-item>
      </el-form>

      <div class="mc-flex mc-mt-20">
        <el-button type="info" class="mc-flex-1 mc-mr-20" @click="tradeDialog = false">取消</el-button>
        <el-button type="primary" class="mc-flex-1" @click="tradeSub()">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="langDialog" title="语言设置">
      <div>
        <el-radio v-model="lang" label="zh-cn">中文</el-radio>
        <el-radio v-model="lang" label="en">English</el-radio>
      </div>
      <div class="mc-flex mc-mt-20">
        <el-button
          type="info"
          class="mc-flex-1 mc-mr-20"
          @click="() => {langDialog = false; lang = $i18n.locale}"
        >取消</el-button>
        <el-button type="primary" class="mc-flex-1" @click="langSub()">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
    let password2Check = (rule, value, callback) => {
      if (this.psdForm.password !== this.psdForm.password2) {
        callback(new Error("两次密码不相同"));
      } else {
        callback();
      }
    };
    let vcodeCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("短信验证码不能为空"));
      } else {
        callback();
      }
    };
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
      if (this.second_password !== this.second_password2) {
        callback(new Error("两次密码不相同"));
      } else {
        callback();
      }
    };
    return {
      psdDialog: false,
      tradeDialog: false,
      langDialog: false,
      lang: "",
      psdForm: {
        password: "",
        password2: "",
        vcode: ""
      },
      psdRules: {
        password: [
          { requred: true, validator: passwordCheck, trigger: "blur" }
        ],
        password2: [
          { requred: true, validator: password2Check, trigger: "blur" }
        ],
        vcode: [{ requred: true, validator: vcodeCheck, trigger: "blur" }]
      },
      psdSwitch: true,
      tradeForm: {
        second_password: "",
        second_password2: "",
        vcode: ""
      },
      tradeRules: {
        second_password: [
          { requred: true, validator: second_passwordCheck, trigger: "blur" }
        ],
        second_password2: [
          { requred: true, validator: second_password2Check, trigger: "blur" }
        ],
        vcode: [{ requred: true, validator: vcodeCheck, trigger: "blur" }]
      },
      tradeSwitch: true
    };
  },
  props: {},
  computed: {
    ...mapState({
      userInfo: "userInfo"
    })
  },
  mounted() {
    this.lang = this.$i18n.locale;
  },
  methods: {
    ...mapMutations({
      SET_REMOVE: "SET_REMOVE",
      SET_LANG: 'SET_LANG'
    }),
    psdSub() {
      this.$refs.psdForm.validate(async valid => {
        if (valid) {
          if (this.psdSwitch) {
            this.psdSwitch = false;
            await this.$axios
              .post(this.$https.api + "/password", this.psdForm)
              .then(res => {
                this.psdSwitch = false;
                if (res.status === 1) {
                  this.$message({
                    message: "登录密码修改成功",
                    type: "success"
                  });
                  this.psdDialog = false;
                }
              });
          }
        }
      });
    },

    tradeSub() {
      this.$refs.tradeForm.validate(async valid => {
        if (valid) {
          if (this.tradeSwitch) {
            this.tradeSwitch = false;
            await this.$axios
              .post(this.$https.api + "/second_password", this.tradeForm)
              .then(res => {
                this.tradeSwitch = false;
                if (res.status === 1) {
                  this.$message({
                    message: "交易密码修改成功",
                    type: "success"
                  });
                  this.$refs.tradeForm.resetFields();
                  this.tradeDialog = false;
                }
              });
          }
        }
      });
    },
    async langSub() {
      await this.$axios
        .post(this.$https.api + "/lang", { lang: this.lang })
        .then(res => {
          if (res.status === 1) {
            this.langDialog = false;
            this.$i18n.locale = this.lang;
            this.SET_LANG(this.lang);
          }
        });
    },
    logOut() {
      this.SET_REMOVE();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.info {
  padding: 30px 0;
}
</style>