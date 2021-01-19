import Vue from 'vue'
import Vuex from 'vuex'
import Http from './plugins/https'

Vue.use(Vuex)
console.log(Http[process.env.NODE_ENV])
export default new Vuex.Store({
  state: {
    https: Http[process.env.NODE_ENV],
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '',
    second_password: localStorage.getItem('second_password') ? localStorage.getItem('second_password') : '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh-cn'
  },
  mutations: {
    SET_USERINFO(state, info) {
      localStorage.setItem('userInfo', JSON.stringify(info));
      localStorage.setItem('second_password', info.second_password);
      localStorage.setItem('token', info.token);
      state.userInfo = info;
      state.second_password = info.second_password;
      state.token = info.token;
    },
    SET_REMOVE(state) {
      localStorage.setItem('userInfo', "");
      localStorage.setItem('second_password', "");
      localStorage.setItem('token', "");
      state.userInfo = "";
      state.second_password = "";
      state.token = "";
    },
    SET_LANG(state, lang) {
      localStorage.setItem('lang', lang)
      state.lang = lang;
    }
  },
  actions: {

  }
})
