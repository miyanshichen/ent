<template>
  <div>
    <public-header headerText="充币">
      <router-link
        slot="header-r"
        to="/finance/deposit/logs"
        class="iconfont icon-cz-jl mc-size20 main-text"
      ></router-link>
    </public-header>
    <div class="container white-bg mc-mtb-20 mc-ptb-20">
      <div class="deposit">
        <div class="title">USDT(ERC)</div>
        <el-divider></el-divider>
        <div class="mc-flex mc-flex-direction-column mc-items-center">
          <div class="qrCode" ref="qrCodeDiv"></div>
          <div class="address mc-text-center">
            <div class="mc-mtb-15">充币地址</div>
            <div>{{ address }}</div>
            <el-button class="copy mc-prl-20 mc-mt-20" size="mini" @click="copyLink(address)">复制</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="container mc-mt-20 white-bg">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="grid-content bg-purple hidden-xs-only">
            <div class="logs-title mc-flex mc-flex-justify-between mc-prl-15">
              <span>充币记录</span>
              <router-link to="/finance/deposit/logs" class="gray3-text mc-size12">查看更多></router-link>
            </div>
            <el-table :data="logsData" stripe>
              <el-table-column label="充币地址" prop="address"></el-table-column>
              <el-table-column label="充币数量" prop="number"></el-table-column>
              <el-table-column label="txid" prop="txid"></el-table-column>
              <el-table-column label="状态" prop="status_name"></el-table-column>
              <el-table-column label="时间" prop="created_at" align="right"></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      address: "",
      qrcode: "",
      logsData: []
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.coinInfo();
    this.getLogs();
  },

  methods: {
    async coinInfo() {
      await this.$axios
        .get(this.$https.api + "/coin/lists?type=1&name=USDT")
        .then(res => {
          if (res.status === 1) {
            this.address = res.data[0].address;
            this.bindQRCode();
          } else {
            this.address = "";
          }
        });
    },
    async getLogs() {
      await this.$axios
        .get(
          this.$https.api + "/coin/record?type=1&page=1&page_size=10&coin_id=1"
        )
        .then(res => {
          if (res.status === 1) {
            this.logsData = res.data;
          } else {
            this.logsData = [];
          }
        });
    },
    bindQRCode() {
      if (this.qrcode) {
        this.qrcode.clear();
        this.qrcode.makeCode(this.address);
      } else {
        this.qrcode = new QRCode(this.$refs.qrCodeDiv, {
          text: this.address,
          width: 120,
          height: 120,
          colorDark: "#333333", //二维码颜色
          colorLight: "#ffffff", //二维码背景色
          correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
        });
      }
    },
    copyLink(data) {
      let clipboard = new Clipboard(".copy", {
        text: function() {
          return data;
        }
      });
      clipboard.on("success", () => {
        this.$message({
          message: "复制成功",
          type: "success"
        });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        this.$message({
          message: "复制失败",
          type: "error"
        });
        clipboard.destroy();
      });
    }
  }
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.deposit {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}
.logs-title {
  height: 44px;
  line-height: 44px;
  background: @eee;
}
</style>
