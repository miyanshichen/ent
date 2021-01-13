<template>
  <div>
    <public-header headerText="提币"></public-header>
    
    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="deposit">
        <div class="title">USDT(ERC)</div>
        <el-divider></el-divider>
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <div class="qrCode" ref="qrCodeDiv"></div>
          <div class="address mc-text-center">
            <div class="mc-mtb-15">充币地址</div>
            <div>{{ address }}</div>
            <el-button
              class="copy mc-prl-20 mc-mt-20"
              size="mini"
              @click="copyLink(address)"
              >复制</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
.withdraw {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
