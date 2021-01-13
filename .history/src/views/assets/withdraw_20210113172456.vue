<template>
  <div>
    <public-header headerText="提币"></public-header>
    
    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="withdraw">
        <div class="title">USDT</div>
        <el-divider></el-divider>
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <el-form class="mc-w-100" :model="withdrawForm">
            <el-form-item>
              <mc-input title="提币地址"></mc-input>
            </el-form-item>
            <el-form-item>
              <mc-input title="提币数量"></mc-input>
            </el-form-item>
            <el-form-item>
              <mc-input title="交易密码" type="password"></mc-input>
            </el-form-item>
            <el-form-item>
              <mc-input title="短信验证码" :code="true"></mc-input>
            </el-form-item>
          </el-form>
          <el-buttonw></el-buttonw>
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
        coin_name: 'USDT',
        number: '',
        second_password: '',
        vcode: ''
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
