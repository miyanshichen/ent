export default {
  install: function (Vue) {
    Vue.component('public-head', HEAD)
    Vue.component('public-nav', NAVMENU)
    Vue.component('public-tabs', Tabs)
    Vue.component('main-head', MainHead)
    Vue.component('main-footer', Mainfooter)
    Vue.component('filters', Filters)
    Vue.component('pages', Pages)
    Vue.component('steps', Steps)
    Vue.component('editor', Editor);
    Vue.component('group-list', GroupList)
    Vue.component('apply-head', ApplyHead)
    Vue.component('apply-footer', ApplyFooter)
    Vue.component('public-table', Table)
  }
}