<template>
  <div>
    <public-header headerText="提币记录"></public-header>
    <div class="container white-bg">
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
      <div class="mc-flex mc-flex-justify-end mc-pb-20">
        <el-pagination :pager-count="5" background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logsData: [
        {
          address: "sdfsdfsdf",
          number: 123123,
          txid: "q23423423423sdfsdfds",
          statusName: "成功",
          time: "2012-12-12 00:00:00",
        },
        {
          address: "sdfsdfsdf",
          number: 123123,
          txid: "q23423423423sdfsdfds",
          statusName: "成功",
          time: "2012-12-12 00:00:00",
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
</style>
