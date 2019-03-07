import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home'
import Login from '../components/page/Login'
import InvestList from '../components/page/Invest/InvestList'
import InvestDetail from '../components/page/Invest/InvestDetail'
import MyAccount from '../components/page/Account/MyAccount'
import MyProfit from '../components/page/Account/MyProfit'
import MyTrade from '../components/page/Account/MyTrade'

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
      path: '/Invest/InvestDetail',
      name: 'InvestDetail',
      component: InvestDetail
    },
    /*{
      path: '/Account/MyAccount',
      name: 'MyAccount',
      component: MyAccount
    },*/
    {
      path: '/MyAccount',
      component: MyAccount,
      name: 'MyAccount',
      redirect: '/MyAccount/MyProfit',
      children: [
        {path: '/MyAccount/MyProfit', component: MyProfit, name: '我的收益', meta: {requirePermission: true}},
        {path: '/MyAccount/MyTrade', component: MyTrade, name: '我的交易', meta: {requirePermission: true}}
      ],
      meta: {requirePermission: true}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
