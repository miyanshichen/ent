import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    https: Http[process.env.NODE_ENV],
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '',
    second_password: localStorage.getItem('second_password') ? JSON.parse(localStorage.getItem('second_password')) : '',
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ''
  },
  mutations: {
    SET_USERINFO(state, info) {
      localStorage.setItem('userInfo', JSON.stringify(info));
      localStorage.setItem('second_password', info.second_password);
      localStorage.setItem('token', (info.token);
      state.userInfo = info;
      state.second_password = info.second_password;
      state.token = info.token;
    }
  },
  actions: {

  }
})