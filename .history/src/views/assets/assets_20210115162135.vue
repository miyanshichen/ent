<template>
  <div>
    <public-header></public-header>
    <div class="mc-p-15">
      <div class="mc-flex">
        <el-button type="primary mc-flex-1 mc-mr-15" @click="$router.push('/finance/deposit')">
          <div class="mc-flex mc-items-center mc-flex-justify-center">
            <span
              class="iconfont icon-Icon-zhuanru mc-size18 white-text mc-mr-10"
            ></span>
            充币
          </div></el-button
        >
        <el-button type="success mc-flex-1" @click="$router.push('/finance/withdraw')">
          <div class="mc-flex mc-items-center mc-flex-justify-center">
            <span
              class="iconfont icon-Icon-zhuanchu mc-size18 white-text mc-mr-10"
            ></span>
            提币
          </div></el-button
        >
      </div>
      
      <el-row :gutter="20" class="mc-mt-20">
        <el-col :xs="24" :span="12" class="mc-mb-20">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>USDT</span>
              <span class="mc-cursor-default">10000.00</span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :span="12" class="mc-mb-20">
          <el-card>
            <div class="mc-flex mc-flex-justify-between">
              <span>ENT</span>
              <span class="mc-cursor-default">10000.00</span>
              <!-- <span class="mc-cursor-default" @click="psdDialog = true">转入</span> -->
            </div>
          </el-card>
        </el-col>
      </el-row>
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

  mounted() {
    this.getCoin();
  },

  methods: {
    async getCoin() {
      await this.$axios.get(this.$https.api + '/wallet?type=1').then(res => {
        console.log(res)
      })
    }
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
