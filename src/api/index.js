import Vue from 'vue'
import axios from 'axios'

//增加默认的请求路径
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c6c15b5ab815c130b4720c7/example'

function startLoading() {    //使用Element loading-start 方法
  Vue.prototype.$loading.show("loading")
}

function endLoading() {    //使用Element loading-close 方法
  /*setTimeout(() => {
    Vue.prototype.$loading.hide();
  }, 3000);*/
  Vue.prototype.$loading.hide()
}

//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

//拦截器
axios.interceptors.request.use(config => {
  //Vue.prototype.$loading.show("loading");
  showFullScreenLoading()
  return config;
}, err => {
  return Promise.reject(err);
})

axios.interceptors.response.use((res) => {
  /*setTimeout(() => {
    Vue.prototype.$loading.hide();
  }, 3000);*/
  //Vue.prototype.$loading.hide();
  console.log('res=' + res)
  tryHideFullScreenLoading()

  return res.data//在这里统一拦截结果，把结果处理成res.data
}, (err) => {
})

export const getIndex = () => {
  return axios.get('/IndexList')
}

export const getOthers = () => {
  return axios.get('/IndexPicture')
}

export const doLogin = (userAccount, userPassword) => {
  return axios.post('/DoLogin', {'userAccount': userAccount, 'userPassword': userPassword})
}
