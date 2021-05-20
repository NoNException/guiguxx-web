// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import iView from 'iview'
Vue.config.productionTip = false
Vue.use(iView) // 全局使用组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // 局部主责
  template: '<App/>'
})
