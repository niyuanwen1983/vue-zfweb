// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import * as custom from './common/filters/custom'

Vue.config.productionTip = false

//全局过滤器
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
