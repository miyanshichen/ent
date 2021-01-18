<template>
  <div>
    <public-header headerText="我的团队"></public-header>
    <div class="container mc-mt-20 white-bg">
      <div class="title">我的团队</div>
      <div class="mc-p-20">
      <el-tree :data="data" :props="defaultProps" accordion>
        <div class="test">测hi是</div>
      </el-tree></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },

  components: {},

  computed: {
    ...mapState({
      userInfo: 'userInfo'
    })
  },

  mounted() {
    this.getTeam();
  },

  methods: {
    async getTeam() {
      await this.$axios.get(`${this.$https.api}/user/myRecommend?page=1&page_size=10&user_id=${this.userInfo.id}`).then(res => {
        console.log(res)
      });
    }
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.container{
  min-height: 70vh;
}
.title{
  height: 44px;
  line-height: 44px;
  padding:0 20px;
  background: @eee;
}
/deep/.el-tree {
  .el-tree-node__content{
    height: 44px;
  }
  .test {
    line-height: 44px;
  }
}
</style>
