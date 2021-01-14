
import Vue from 'vue';
import store from '../store/store.js'
import axios from 'axios';
import router from '../router';
import ElementUI from 'element-ui'
let service = axios.create({
  headers: {}
})
axios.defaults.baseURL = ""
let loading;
function startLoading() {
  loading = Vue.prototype.$loading({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, .7)",
    // fullscreen: false
    // target: document.querySelector('.loading-area')//设置加载动画区域
  });
}
function endLoading() {
  loading.close();
}

//声明一个对象用于存储请求个数
let needLoadingRequestCount = 0;
function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
};
function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
};


// 添加请求拦截器
service.interceptors.request.use(function (config) {

  showFullScreenLoading();

  return config
}, function (error) {
  tryHideFullScreenLoading();
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  tryHideFullScreenLoading();
  let urlFilter = []
  let data = response.data
  let codeArr = [18000]   //过滤掉状态
  let logoutCode = [18001, 20015, 20007, 20008, 20204]
  if (data.code) {
    if (!codeArr.includes(data.code) && !urlFilter.includes(response.config.url.split('v1')[1])) {
      ElementUI.Message({
        message: data.msg,
        type: 'error'
      })
    }
    if (logoutCode.includes(data.code) && !urlFilter.includes(response.config.url.split('v1')[1])) {
      store.commit('REMOVE_USER');
      router.push('/login');
    }
  }

  if (response.data.code == "20009") {
    ElementUI.Message({
      message: data.msg,
      type: 'error'
    })
  }
  return response.data
}, function (error) {
  tryHideFullScreenLoading();
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
