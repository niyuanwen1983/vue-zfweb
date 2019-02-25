// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import * as custom from './common/filters/custom'
/*import Loading from "./components/common/loading/index"

Vue.use(Loading);*/

Vue.config.productionTip = false

//全局过滤器
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

import Loading from './components/common/loading'
//import Confirm from './components/common/confirm'

Vue.use(Loading)
//Vue.use(Confirm)

import Confirm from './components/common/confirm'

Vue.prototype.$my_confirm = Confirm.install;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  if (!token && to.path !== '/Login') {
    next('/Login')
  } else if (token && to.path === '/Login') {
    next('/')
  } else {
    next()
  }
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
