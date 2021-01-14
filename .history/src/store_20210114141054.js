import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)
console.log(Http[process.env.NODE_ENV)

export default new Vuex.Store({
  state: {
    https: ''
  },
  mutations: {

  },
  actions: {

  }
})
