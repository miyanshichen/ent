import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)
console.log(this.process.ENV)

export default new Vuex.Store({
  state: {
    https: ''
  },
  mutations: {

  },
  actions: {

  }
})
