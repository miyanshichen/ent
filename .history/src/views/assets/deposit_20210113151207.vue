<template>
  <div>
    <public-header>
      <router-link slot="header-r" to="/finance/deposit/logs" class="iconfont icon-cz-jl mc-size20 main-text"></router-link>
    </public-header>
    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="deposit mc-border">
        sjsdk
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: ''
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.deposit{
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
}
</style>
