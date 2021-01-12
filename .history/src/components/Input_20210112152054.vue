<template>
  <div class="mc-input">
    <div class="input-label">标题</div>
    <el-input v-model="value"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    val: {}
  },
  data () {
    return {
      value: ''
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.value = val;
  },

  methods: {}
}

</script>
<style lang='less' scoped>
.mc-input{
  position: relative;

}
</style>
