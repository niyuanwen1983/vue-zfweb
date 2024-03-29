let loadTemp = require('./Loading.vue').default; // cli3.0以后引入vue模板需要default

let Load = {}; // 定义插件对象
Load.install = (Vue, options) => { // Vue的install方法,用于定义vue插件
  // 如果存在loading 不重复创建DOM
  if (document.getElementsByClassName('.load-model').length) return;

  let lTemp = Vue.extend(loadTemp);

  // 实例化VUE实例
  let $vm = new lTemp();

  // 此处使用$mount来手动开启编译,用$el来访问元素,并插入到body中
  let tpl = $vm.$mount().$el;
  document.body.appendChild(tpl);

  Vue.prototype.$loading = { // 在Vue的原型上添加实例方法,以全局调用
    show(options) {
      if (options == "loading") {
        $vm.showLoading = true;
      }
    },
    hide() {
      $vm.showLoading = false;
    }
  }
}

// 导出Load
export default Load;
