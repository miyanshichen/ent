<template>
  <div>
    <public-header headerText="提币"></public-header>
    
    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="withdraw">
        <div class="title">USDT</div>
        <el-divider></el-divider>
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <el-form :model="withdrawForm"></el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      withdrawForm: {
        address: '',
        coinName: 'USDT',
        number: ''
      }
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
