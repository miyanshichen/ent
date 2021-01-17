<template>
  <div>
    <public-header headerText="充币记录"></public-header>
    <div class="container white-bg">
      <el-table :data="logsData" stripe class="mc-mtb-20">
        <el-table-column label="充币地址" prop="address"></el-table-column>
        <el-table-column label="充币数量" prop="number"></el-table-column>
        <el-table-column label="txid" prop="txid"></el-table-column>
        <el-table-column label="状态" prop="statusName"></el-table-column>
        <el-table-column
          label="时间"
          prop="time"
          align="right"
        ></el-table-column>
      </el-table>
      <div class="mc-flex mc-flex-justify-end mc-pb-20">
        <el-pagination :pager-count="5" @current-change="pageChange" background layout="prev, pager, next" :total="1000">
        </el-pagination>
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
        type: 1,
        page: 1,
        page_size: 10,
        coin_id: 1
      }
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getLogs();
  },

  methods: {
    async getLogs() {
      await this.$axios.get(`${this.$https.api}/coin/record?type=${this.form.type}&page=${this.form.page}&page_size=${this.form.page_size}&coin_id=${this.form.coin_id}`).then(res => {
        if (res.status === 1) {
          this.logsData = res.data;
        } else {
          this.logsData = [];
        }
      })
    },
    pageChange(page) {
      this.form.page = page;
      this.getLogs();
    }
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
