<template>
  <div>
    <public-header headerText="购买ENT">
      <router-link
        slot="header-r"
        to="/finance/trans/logs"
        class="iconfont icon-cz-jl mc-size20 main-text"
      ></router-link>
    </public-header>
    <div class="container white-bg mc-mtb-20 mc-overflow">
      <div class="withdraw">
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <el-form
            class="mc-w-100"
            :model="buyForm"
            :rules="buyRules"
            ref="buyForm"
          >
            <!-- <el-form-item>
              <mc-input title="买入价" suffixText="ENT">
              </mc-input>
            </el-form-item>-->
            <el-form-item prop="number">
              <mc-input
                title="买入量"
                :val="buyForm.number"
                @input-change="numChange"
                suffixText="ENT"
              ></mc-input>
            </el-form-item>
            <!-- <el-form-item>
              <mc-input title="交易额" disabled></mc-input>
            </el-form-item>-->
            <el-form-item prop="password">
              <mc-input
                title="交易密码"
                :val="buyForm.password"
                @input-change="
                  (val) => {
                    buyForm.password = val;
                  }
                "
                type="password"
              ></mc-input>
            </el-form-item>
            <!-- <el-form-item>
              <mc-input title="短信验证码" :code="true"></mc-input>
            </el-form-item>-->
          </el-form>
          <div class="mc-w-100 main-text mc-size12">
            可用USDT：{{ canUseUSDT }}
          </div>
          <div
            class="total mc-flex mc-flex-justify-between mc-w-100 mc-mb-15 main-text"
          >
            <span>交易额</span>
            <span>{{ useUSDT }}USDT</span>
          </div>
          <el-button type="primary" class="mc-w-100" @click="transSub()"
            >提交</el-button
          >
        </div>
      </div>
    </div>
    <div class="container mc-mt-20 white-bg">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="grid-content bg-purple hidden-xs-only">
            <div class="logs-title mc-flex mc-flex-justify-between mc-prl-15">
              <span>购币记录</span>
              <router-link to="/finance/trans/logs" class="gray3-text mc-size12"
                >查看更多></router-link
              >
            </div>
            <el-table :data="logsData" stripe>
              <el-table-column label="币种" prop="from_coin"></el-table-column>
              <el-table-column
                label="买入币种"
                prop="to_coin"
              ></el-table-column>
              <el-table-column label="买入量" prop="number"></el-table-column>
              <!-- <el-table-column label="交易额" prop="address"></el-table-column> -->
              <!-- <el-table-column label="状态" prop="status"></el-table-column> -->
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
    let numCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("买入量不能为空"));
      } else {
        callback();
      }
    };
    let psdCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("交易密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      buyForm: {
        number: "",
        from_coin_id: "",
        coin_id: "",
        password: "",
      },
      buyRules: {
        number: [{ required: true, validator: numCheck, trigger: "blur" }],
        password: [{ required: true, validator: psdCheck, trigger: "blur" }],
      },
      logsData: [],
      feeRadio: 0,
      transSwitch: true,
      useUSDT: 0.0,
      canUseUSDT: 0.0,
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getRadio();
    this.getUSDT();
    this.transLogs();
  },

  methods: {
    async getRadio() {
      await this.$axios
        .get(`${this.$https.api}/user/exchangeInfo?from_coin_id=￥{}&coin_id=1`)
        .then((res) => {
          if (res.status === 1) {
            this.feeRadio = res.data;
          }
        });
    },
    async getCoin() {
      console.log(this.$https.api);
      await this.$axios.get(this.$https.api + "/wallet?type=1").then((res) => {
        if (res.status === 1) {
          res.data.forEach((item) => {
            if (item.name === "USDT") {
              this.buyForm.from_coin_id = item.id;
            } else if (item.name === "ENT") {
              this.buyForm.coin_id = item.id;
            }
          });
        } else {
          this.USDTassets = "";
          this.ENTassets = "";
        }
      });
    },
    async getUSDT() {
      await this.$axios
        .get(this.$https.api + "/coin/lists?type=2&name=USDT")
        .then((res) => {
          if (res.status === 1) {
            this.canUseUSDT = res.data[0].over_num;
          } else {
            this.canUseUSDT = 0;
          }
        });
    },
    numChange(val) {
      this.buyForm.number = val;
      this.useUSDT = val * this.feeRadio;
    },
    transSub() {
      this.$refs.buyForm.validate(async (valid) => {
        if (valid) {
          if (this.transSwitch) {
            this.transSwitch = false;
            this.$axios
              .post(this.$https.api + "/user/exchange", this.buyForm)
              .then((res) => {
                this.transSwitch = true;
                if (res.status === 1) {
                  this.$message({
                    message: "购买成功",
                    type: "success",
                  });
                  this.transLogs();
                }
              });
          }
        }
      });
    },
    async transLogs() {
      await this.$axios
        .get(this.$https.api + "/user/exchangeList?page=1&page_size=10")
        .then((res) => {
          if (res.status === 1) {
            this.logsData = res.data;
          } else {
            this.logsData = [];
          }
        });
    },
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.withdraw {
  width: 90%;
  max-width: 500px;
  margin: 50px auto;
}
.logs-title {
  height: 44px;
  line-height: 44px;
  background: @eee;
}
</style>
