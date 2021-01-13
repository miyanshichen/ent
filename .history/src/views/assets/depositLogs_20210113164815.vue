<template>
  <div>
    <public-header headerText="充币记录"></public-header>
    <div class="container">
      <el-table :data="logsData" stripe>
              <el-table-column
                label="充币地址"
                prop="address"
              ></el-table-column>
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
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
