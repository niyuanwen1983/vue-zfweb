import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {//要设置的全局访问的state对象
    isX: true
}

const getters = {   //实时监听state值的变化(最新状态)
    getIsX(state) {  //方法名随意,主要是来承载变化的isX的值
        return state.isX
    }
}

const mutations = {
    changeIsX(state, obj) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.isX = obj
    }
}

const actions = {
    setIsX(context, obj) {   //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性，obj为要变化的形参
        context.commit('changeIsX', obj)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store