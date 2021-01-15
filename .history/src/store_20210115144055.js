import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    https: Http[process.env.NODE_ENV],
    userInfo:  '',
    second_password:  '',
    token:  ''
  },
  mutations: {
    SET_USERINFO(state, info) {
      localStorage.setItem('userInfo', JSON.stringify(info));
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
