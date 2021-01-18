import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../assets/i18n/en'
import zh from '../assets/i18n/zh'

Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  'zh-cn': zh, //中文繁体语言包   
  'en': en  // 英文语言包
}

export default new VueI18n({ 
  locale: "zh-cn", // set locale 默认显示英文
  messages: messages // set locale messages
})