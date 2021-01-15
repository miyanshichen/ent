<template>
  <div class="mc-input">
    <div class="input-label" :class="labelSwitch || value !== '' ? 'active' : ''">{{title}}</div>
    <el-input v-model="value" :disabled="disabled" @focus="inputFocus()" @blur="inputBlur()" v-if="type === 'text'" @change="inputChange()">
      <span slot="suffix" class="main-text mc-cursor-default" v-if="code" @click="getCode()">{{codeText ? codeText : '获取验证码'}}</span>
      <span slot="suffix" class="main-text mc-cursor-default" v-if="suffixText">{{suffixText}}</span>
    </el-input>
    <el-input v-model="value" :type="passSwitch ? 'text' : 'password'" @focus="inputFocus()" @blur="inputBlur()" v-if="type === 'password'" @change="inputChange()">
      <span slot="suffix" class="eye mc-size24 iconfont mc-mt-5 mc-display-in-block main-text" :class="passSwitch ? 'icon-yanjing_xianshi_o': 'icon-yanjing_yincang_o'" @click="passSwitch = !passSwitch"></span>
    </el-input>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      default: ''
    },
    title: {},
    type: {
      default: 'text'
    },
    code: {
      type: Boolean,
      default: false
    },
    disabled: {
      default: false
    },
    suffixText: {
      default: ''
    },
    mobile: {
      default: ''
    }
  },
  data () {
    return {
      value: '',
      labelSwitch: false,
      passSwitch: false,
      codeSwitch: false,
      codeText: '',
      timer: ''
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.value = this.val;
  },

  methods: {
    inputFocus() {
      this.labelSwitch = true;
    },
    inputBlur() {
      this.labelSwitch = false;
    },
    inputChange() {
      this.$emit('input-change', this.value);
    },
    getCode() {
      if (!this.codeSwitch) {
        this.codeSwitch = true;
        if (this.mobile === "") {
          this.$message({
            type: 'error',
            message: '请先填写手机号'
          });
          this.codeSwitch = false;
        } else {
          this.$axios.post(this.$https.api + '/vcode', {account: this.mobile, type: 1}).then(res => {
            if (res.status === 1) {
              let time = 60;
              this.timer = setInterval(() => {
                time--;
                if (time > 0) {
                  setTimeout(this.timer);
                  this.codeSwtich = false;
                  this.codeText = "获取验证码";
                } else {
                  this.codeText = time + 's';
                }
                console.log(codeText)
              }, 1000);
            }
          })
        }
      }
    }
  }
}

</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.mc-input{
  position: relative;
  // padding-top: 30px;
  .input-label{
    position: absolute;
    top: 5px;
    color: @main;
    transition: all 0.15s linear;
    &.active{
      top: -20px;
      font-size: 12px;
    }
  }
  /deep/.el-input{
    .el-input__inner{
      padding: 0;
    }
  }
}
</style>
