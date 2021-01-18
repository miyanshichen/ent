<template>
  <div>
    <public-header></public-header>
    <!-- <el-carousel>
      <el-carousel-item v-for="(item, index) in newsList" :key="index">
        <router-link :to="'/news/details?id=' + item.id">
          <el-image :src="item.index_pic ? item.index_pic : require('@/assets/image/login-bg.png')"></el-image>
        </router-link>
      </el-carousel-item>
    </el-carousel> -->
      <div class="video mc-w-100">
        <video controls class="mc-w-100">
          <source :src="require('@/assets/image/movie.mp4')" type="video/mp4" />
          <source :src="require('@/assets/image/movie.mp4')" type="video/ogg" />您的浏览器不支持该功能。
        </video>
      </div>
    <div class="container">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getNews();
  },

  methods: {
    async getNews() {
      await this.$axios
        .get(this.$https.api + "/news?page=1&page_size=5")
        .then(res => {
          if (res.status === 1) {
            this.newsList = res.data;
          } else {
            this.newsList = [];
          }
        });
    }
  }
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
</style>
