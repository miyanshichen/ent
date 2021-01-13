<template>
  <div>
    <public-header>
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
    <div class="container mc-mt-20">
      <el-row :gutter="10">
        <el-col :span="24"
          ><div class="grid-content bg-purple hidden-xs-only">
            
            </div
        ></el-col>
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
      address: "fsdfdsfsdfsdfdsfsdfsdfdsfsdfsdfdsfsd",
      qrcode: "",
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.bindQRCode();
  },

  methods: {
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
          correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
        });
      }
    },
    copyLink(data) {
      let clipboard = new Clipboard(".copy", {
        text: function () {
          return data;
        },
      });
      clipboard.on("success", () => {
        this.$message({
          message: "复制成功",
          type: "success",
        });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        this.$message({
          message: "复制失败",
          type: "error",
        });
        clipboard.destroy();
      });
    },
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.deposit {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
