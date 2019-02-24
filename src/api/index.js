import Vue from 'vue'
import axios from 'axios'

//增加默认的请求路径
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c6c15b5ab815c130b4720c7/example'

//拦截器
axios.interceptors.request.use(config => {
  Vue.prototype.$loading.show("loading");
  return config;
}, err => {
  return Promise.reject(err);
})

axios.interceptors.response.use((res) => {
  setTimeout(() => {
    Vue.prototype.$loading.hide();
  }, 3000);

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
