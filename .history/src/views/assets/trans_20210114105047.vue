<template>
  <div>
    <public-header headerText="购买ENT">
      <router-link
        slot="header-r"
        to="/finance/withdraw/logs"
        class="iconfont icon-cz-jl mc-size20 main-text"
      ></router-link
    ></public-header>

    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="withdraw">
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <el-form class="mc-w-100" :model="buyForm">
            <el-form-item>
              <mc-input title="买入价" suffixText="ENT">
              </mc-input>
            </el-form-item>
            <el-form-item>
              <mc-input title="买入量" suffixText="ENT"></mc-input>
            </el-form-item>
            <!-- <el-form-item>
              <mc-input title="交易额" disabled></mc-input>
            </el-form-item> -->
            <el-form-item>
              <mc-input title="交易密码" type="password"></mc-input>
            </el-form-item>
            <el-form-item>
              <mc-input title="短信验证码" :code="true"></mc-input>
            </el-form-item>
          </el-form>
          <div class="total mc-flex mc-flex-justify-between mc-flex-1">
            <span>交易额</span>
            <span>0.00USDT</span>
          </div>
          <el-button type="primary" class="mc-w-100">提交</el-button>
        </div>
      </div>
    </div>
    <div class="container mc-mt-20 white-bg">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="grid-content bg-purple hidden-xs-only">
            <div class="logs-title mc-flex mc-flex-justify-between mc-prl-15">
              <span>充币记录</span>
              <router-link
                to="/finance/withdraw/logs"
                class="gray3-text mc-size12"
                >查看更多></router-link
              >
            </div>
            <el-table :data="logsData" stripe>
              <el-table-column label="提币数量" prop="number"></el-table-column>
              <el-table-column label="实到数量" prop="number_u"></el-table-column>
              <el-table-column label="提币地址" prop="address"></el-table-column>
              <el-table-column label="Id" prop="id"></el-table-column>
              <el-table-column label="状态" prop="status"></el-table-column>
              <el-table-column
                label="时间"
                prop="created_at"
                align="right"
              ></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyForm: {
        number: "",
        price: "",
        vcode: "",
        second_password: ""
      },
      logsData: [
        {
          address: "sdfsdfsdf",
          number: 123123,
          number_u: 123,
          id: '234234sfddf',
          status: 1,
          created_at: "2012-12-12 00:00:00",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.withdraw {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
}
.logs-title {
  height: 44px;
  line-height: 44px;
  background: @eee;
}
</style>
