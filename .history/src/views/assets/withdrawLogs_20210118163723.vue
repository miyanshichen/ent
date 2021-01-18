<template>
  <div>
    <public-header headerText="提币记录"></public-header>
    <div class="container white-bg">
      <el-table :data="logsData" stripe class="mc-mtb-20">
        <el-table-column label="提币数量" prop="number"></el-table-column>
        <el-table-column label="实到数量" prop="number_u"></el-table-column>
        <el-table-column label="提币地址" prop="address"></el-table-column>
        <el-table-column label="Id" prop="id"></el-table-column>
        <el-table-column label="状态" prop="status"></el-table-column>
        <el-table-column label="时间" prop="created_at" align="right"></el-table-column>
      </el-table>
      <div class="mc-flex mc-flex-justify-end mc-pb-20">
        <el-pagination :pager-count="5" @current-change="pageChange" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logsData: [],
      form: {
        type: 2,
        page: 1,
        page_size: 10,
        coin_id: ''
      }
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
            this.f.coin_id = res.data[0].id;
            this.getLogs();
          }
        });
    },
    async getLogs() {
      await this.$axios
        .get(
          `${this.$https.api}/coin/record?type=${this.form.type}&page=${this.form.page}&page_size=${this.form.page_size}&coin_id=${this.form.coin_id}`
        )
        .then(res => {
          if (res.status === 1) {
            this.logsData = res.data;
          } else {
            this.logsData = [];
          }
        });
    },
    pageChange(page) {
      this.form.page = page;
      this.getLogs();
    }
  }
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
