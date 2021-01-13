<template>
  <div>
    <public-header headerText="充币记录"></public-header>
    <div class="container">
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
