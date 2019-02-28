import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home'
import Login from '../components/page/Login'
import InvestList from '../components/page/Invest/InvestList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Invest/InvestList',
      name: 'InvestList',
      component: InvestList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
