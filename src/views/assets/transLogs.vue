<template>
  <div>
    <public-header headerText="ENT记录"></public-header>
    <div class="container white-bg">
      <el-table :data="logsData" stripe class="mc-mtb-20">
        <el-table-column label="币种" prop="from_coin"></el-table-column>
        <el-table-column label="买入币种" prop="to_coin"></el-table-column>
        <el-table-column label="买入量" prop="number"></el-table-column>
        <!-- <el-table-column label="交易额" prop="address"></el-table-column> -->
        <!-- <el-table-column label="状态" prop="status"></el-table-column> -->
        <el-table-column label="时间" prop="created_at" align="right"></el-table-column>
      </el-table>
      <div class="mc-flex mc-flex-justify-end mc-pb-20">
        <el-pagination
          :pager-count="5"
          background
          layout="prev, pager, next"
          :total="pageTotal"
          @current-change="pageChange"
          :page-size="20"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logsData: [],
      page: {
        page: 1,
        page_size: 20
      },
      pageTotal: 0
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.transLogs();
  },

  methods: {
    async transLogs() {
      await this.$axios
        .get(
          `${this.$https.api}/user/exchangeList?page=${this.page.page}&page_size=${this.page.page_size}`
        )
        .then(res => {
          if (res.status === 1) {
            this.logsData = res.data.data;
            this.pageTotal = res.data.total;
          } else {
            this.logsData = [];
          }
        });
    },
    pageChange(page) {
      this.page.page = page;
      this.transLogs();
    }
  }
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
