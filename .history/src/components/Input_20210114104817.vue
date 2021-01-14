<template>
  <div class="mc-input">
    <div class="input-label" :class="labelSwitch || value !== '' ? 'active' : ''">{{title}}</div>
    <el-input v-model="value" :disabled="disabled" @focus="inputFocus()" @blur="inputBlur()" v-if="type === 'text'">
      <span slot="suffix" class="main-text mc-cursor-default" v-if="code">获取验证码</span>
      <span slot="suffix" class="main-text mc-cursor-default" v-if="suffix">{{suffix}}</span>
    </el-input>
    <el-input v-model="value" :type="passSwitch ? 'text' : 'password'" @focus="inputFocus()" @blur="inputBlur()" v-if="type === 'password'">
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
    }
  },
  data () {
    return {
      value: '',
      labelSwitch: false,
      passSwitch: false
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
