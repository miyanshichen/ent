<template>
  <div class="mc-input">
    <div class="input-label" :class="labelSwitch || value !== '' ? 'active' : ''">{{title}}</div>
    <el-input v-model="value" @focus="inputFocus()" @blur="inputBlur()" v-if="type === 'text'"></el-input>
    <el-input v-model="value" @focus="inputFocus()" @blur="inputBlur()" v-if="type === 'password'">
      <span slot="suffix" :type="passSwitch ? 'text' : 'password'" class="mc-size24 iconfont mc-mt-5" :class="passSwitch ? 'icon-yanjing_xianshi_o': 'icon-yanjing_yincang_o'" @click="passSwitch = !passSwitch"></span>
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
  padding-top: 30px;
  .input-label{
    position: absolute;
    top: 40px;
    color: @main;
    transition: all 0.15s linear;
    &.active{
      top: 10px;
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
