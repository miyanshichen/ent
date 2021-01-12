<template>
  <div class="mc-input">
    <div class="input-label" :class="labelSwitch || value !== "" ? 'active' : ''">标题</div>
    <el-input v-model="value" @focus="inputFocus()"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      default: ''
    }
  },
  data () {
    return {
      value: '',
      labelSwitch: false
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.value = this.val;
    console.log(this.value, this.labelSwitch)
    console.log(this.labelSwitch || this.value !== "")
  },

  methods: {
    inputFocus() {
      this.labelSwitch = true;
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
    transition: all 0.2s linear;
    &.active{
      top: 10px;
      font-size: 12px;
    }
  }
}
</style>
