import Vue from 'vue'
import axios from 'axios'

//增加默认的请求路径
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c6c15b5ab815c130b4720c7/example'

//拦截器
axios.interceptors.response.use((res) => {

  return res.data//在这里统一拦截结果，把结果处理成res.data
}, () => {
})

export const getIndex = () => {
  return axios.get('/IndexList')
}
