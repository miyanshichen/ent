<template>
  <div class="mc-input">
    <div class="input-label">标题</div>
    <el-input v-model="value" @focus="inputFocus()"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    val: {}
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
    this.value = val;
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
    transition: all 
    .active{
      top: 0;
    }
  }
}
</style>
