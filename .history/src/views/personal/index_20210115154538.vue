<template>
  <div>
    <public-header>
      <router-link to slot="header-r" class="main-text">退出</router-link>
    </public-header>
    <div></div>
      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    
    return {
      
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.info {
  padding: 30px 0;
}
</style>