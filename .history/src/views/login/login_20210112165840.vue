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
  background: url('~@/assets/image/login-bg.jpg');
}
</style>
