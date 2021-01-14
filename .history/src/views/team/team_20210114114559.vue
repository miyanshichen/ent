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
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
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
.container{
  min-hegiht: 70vh;
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
