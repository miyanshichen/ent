<template>
  <div>
    <public-header headerText="提币">
      <router-link
        slot="header-r"
        to="/finance/withdraw/logs"
        class="iconfont icon-cz-jl mc-size20 main-text"
      ></router-link>
    </public-header>

    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="withdraw">
        <div class="title">USDT</div>
        <el-divider></el-divider>
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <el-form
            class="mc-w-100"
            :model="withdrawForm"
            ref="withdrawForm"
            :rules="withdrawRules"
          >
            <el-form-item prop="address">
              <mc-input
                :val="withdrawForm.address"
                @input-change="
                  (val) => {
                    withdrawForm.address = val;
                  }
                "
                title="提币地址"
              ></mc-input>
            </el-form-item>
            <el-form-item prop="number">
              <mc-input
                :val="withdrawForm.number"
                @input-change="
                  (val) => {
                    withdrawForm.number = val;
                  }
                "
                title="提币数量"
              ></mc-input>
            </el-form-item>
            <el-form-item prop="second_password">
              <mc-input
                :val="withdrawForm.second_password"
                @input-change="
                  (val) => {
                    withdrawForm.second_password = val;
                  }
                "
                title="交易密码"
                type="password"
              ></mc-input>
            </el-form-item>
            <!-- <el-form-item>
              <mc-input title="短信验证码" :code="true"></mc-input>
            </el-form-item>-->
          </el-form>
          <el-button type="primary" class="mc-w-100" @click="withdrawSub()"
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
              <span>充币记录</span>
              <router-link
                to="/finance/withdraw/logs"
                class="gray3-text mc-size12"
                >查看更多></router-link
              >
            </div>
            <el-table :data="logsData" stripe>
              <el-table-column label="提币数量" prop="number"></el-table-column>
              <el-table-column
                label="实到数量"
                prop="number_u"
              ></el-table-column>
              <el-table-column
                label="提币地址"
                prop="address"
              ></el-table-column>
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
    let addressCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("提币地址不能为空"));
      } else {
        callback();
      }
    };
    let numberCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("提币数量不能为空"));
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
      withdrawForm: {
        address: "",
        coin_id: "",
        number: "",
        second_password: "",
        label: "",
      },
      withdrawRules: {
        address: [{ required: true, validator: addressCheck, trigger: "blur" }],
        number: [{ required: true, validator: numberCheck, trigger: "blur" }],
        second_password: [
          { required: true, validator: psdCheck, trigger: "blur" },
        ],
      },
      logsData: [],
      withdrawSwitch: true,
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getUSDT();
  },

  methods: {
    async getUSDT() {
      await this.$axios
        .get(this.$https.api + "/coin/lists?type=2&name=USDT")
        .then((res) => {
          if (res.status === 1) {
            this.withdrawForm.coin_id = res.data[0].id;
            this.getLogs();
          }
        });
    },
    withdrawSub() {
      this.$refs.withdrawForm.validate(async (valid) => {
        if (valid) {
          if (this.withdrawSwitch) {
            this.withdrawSwitch = false;
            await this.$axios
              .post(this.$https.api + "/coin/out", this.withdrawForm)
              .then((res) => {
                this.withdrawSwitch = true;
                if (res.status === 1) {
                  this.$message({
                    message: "提币成功",
                    type: "success",
                  });
                  this.$refs.withdrawForm.resetFields();
                  this.getLogs();
                }
              });
          }
        }
      });
    },

    async getLogs() {
      await this.$axios
        .get(
          this.$https.api +
            "/coin/record?type=2&page=1&page_size=10&coin_id=" +
            this.withdrawForm.coin_id
        )
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
  margin: 0 auto;
}
.logs-title {
  height: 44px;
  line-height: 44px;
  background: @eee;
}
</style>
