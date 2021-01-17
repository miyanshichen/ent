<template>
  <div>
      <public-header :headerText="news.title"></public-header>
      <div class="container mc-mt-20 white-bg">
          <div class="mc-p-15">
              <div class="title mc-size18 mc-text-center">{{news.title}}</div>
              <div class="mc-size12 mc-text-center mc-mtb-15">{{news.created_at}}</div>
              <div v-html="news.content"></div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: '',
  data() { 
    return {
        newTitle: "",
        id: '',
        userId: '',
        news: {}
    }
  },
  props: {

  },
  computed:{
      ...mapState({
          userInfo: 'userInfo'
      })
  },
  mounted() {
      this.id = this.$route.query.id;
      this.userId = this.userInfo.id;
      this.getDetails();
  },
  methods:{
      async getDetails() {
          await this.$axios.get(`${this.$https.api}/new/${this.id}/${this.userId}`).then(res => {
            if (res.status === 1) {
                this.newTitle = res.data.title;
                this.news = res.data;
            }
          })
      }
  },
 }
</script>

<style lang="less" scoped>
@import "~@/assets/css/public.less";
.container{
    min-height: 500px;
}
</style>