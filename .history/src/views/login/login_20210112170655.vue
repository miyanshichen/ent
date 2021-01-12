<template>
  <div class="login">
    <div class="container">
      <el-form>
        <mc-input></mc-input>
        <mc-input></mc-input>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.login{
  width: 100vw;
  height: 100vh;
  background: url('~@/assets/image/login-bg.jpg') center center no-repeat;
}
</style>
