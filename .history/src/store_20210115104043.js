import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    https: Http[process.env.NODE_ENV],
    userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : '',
    second_password: localStorage.getItem('second_password') ? localStorage.getItem('second_password') : '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },
  mutations: {
    SET_USERINFO(state, info) {
      console.log(info)
      localStorage.setItem('userInfo', info);
      localStorage.setItem('second_password', info.second_password);
      localStorage.setItem('token', info.token);
      state.userInfo = info;
      state.second_password = info.second_password;
      state.token = info.token;
    }
  },
  actions: {

  }
})
