<template>
  <div>
    <public-header></public-header>
    <el-row>
      <el-col>
        <el-carousel>
          <el-carousel-item v-for="(item, index) in newsList" :key="index">
            <router-link :to="'/news/details?id=' + item.id">
              <el-image
                fit="cover"
                :src="item.index_pic ? item.index_pic : require('@/assets/image/login-bg.png')"
              ></el-image>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <div class="container">
      <div class="asset white-bg mc-mtb-20">
        <el-row :gutter="20" class="mc-flex mc-flex-wrap">
          <el-col :xs="24" :span="12" class="mc-mb-20">
            <el-card>
              <div class="mc-flex mc-flex-justify-between">
                <div>
                  <div>USDT</div>
                  <div class="mc-size24">{{USDTassets.over_num}}</div>
                </div>
                <div class="mc-flex mc-flex-direction-column">
                  <el-button type="primary" size="mini" class="mc-ml-10 mc-mb-5">充币</el-button>
                  <el-button type="warning" size="mini">提币</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :span="12" class="mc-mb-20">
            <el-card class="mc-h-100">
              <div>ENT</div>
              <div class="mc-size24">{{ENTassets.over_num}}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="container video mc-w-100">
      <video controls class="mc-w-100 mc-h-100">
        <source :src="require('@/assets/image/movie.mp4')" type="video/mp4" />
        <source :src="require('@/assets/image/movie.mp4')" type="video/ogg" />您的浏览器不支持该功能。
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      USDTassets: {},
      ENTassets: {}
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getNews();
    this.getCoin();
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
    },

    async getCoin() {
      console.log(this.$https.api);
      await this.$axios.get(this.$https.api + "/wallet?type=1").then(res => {
        if (res.status === 1) {
          res.data.forEach(item => {
            if (item.name === "USDT") {
              this.USDTassets = item;
            } else if (item.name === "ENT") {
              this.ENTassets = item;
            }
          });
        } else {
          this.USDTassets = "";
          this.ENTassets = "";
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
@import "~@/assets/css/public.less";
.video,
video {
  max-height: 500px;
  margin-bottom: 50px;
}
.asset {
  padding: 20px;
}
.el-image{
  height: 300px;
}
</style>
