<template>
  <div>
    <public-header headerText="我的团队"></public-header>
    <div class="container mc-mt-20 white-bg">
      <div class="title">我的团队</div>
      <div class="mc-p-20">
        <el-tree
          :data="data"
          :props="defaultProps"
          accordion
          lazy
          :load="loadNode"
        >
          <!-- <div class="test">测hi是</div> -->
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      data: [{ name: "" }],
      defaultProps: {
        children: "children",
        label: "name",
      },
      userId: "",
    };
  },

  components: {},

  computed: {
    ...mapState({
      userInfo: "userInfo",
    }),
  },

  mounted() {},

  methods: {
    async loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: this.userInfo.name, id: this.userInfo.id }]);
      }
      if (node.level > 1) return resolve([]);
      await this.$axios
        .get(
          `${this.$https.api}/user/myRecommend?page=1&page_size=10&user_id=${node.data.id}`
        )
        .then((res) => {
          if (res.status === 1) {
            resolve(res.data.data);
          }
        });
    },
  },
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.container {
  min-height: 70vh;
}
.title {
  height: 44px;
  line-height: 44px;
  padding: 0 20px;
  background: @eee;
}
/deep/.el-tree {
  .el-tree-node__content {
    height: 44px;
  }
  .test {
    line-height: 44px;
  }
}
</style>
