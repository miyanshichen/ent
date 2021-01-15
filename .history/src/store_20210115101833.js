import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    https: Http[process.env.NODE_ENV],
    userInfo: '',
    second_password: ''
  },
  mutations: {
    SET_USERINFO(state, info) {
      localStorage.setItem('userInfo', info);
      localStorage.setItem('userInfo', info);
      state.userInfo = info;

    }
  },
  actions: {

  }
})
