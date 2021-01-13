<template>
  <div>
    <public-header>
      <router-link slot="header-r" to="/finance/deposit/logs" class="iconfont icon-cz-jl mc-size20 main-text"></router-link>
    </public-header>
    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="deposit">
        <div class="title">USDT</div>
        <el-divider></el-divider>

      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Clipboard from "clipboard";
export default {
  data () {
    return {
      address: '',
      qrcode: ''
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
  max-width: 600px;
  margin: 0 auto;
}
</style>
