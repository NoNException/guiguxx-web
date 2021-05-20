// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iview组件库的样式
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import iView from 'iview'

Vue.config.productionTip = false
Vue.use(iView) // 全局使用组件

new Vue({
    el: '#app',
    router,
    components: { App }, // 局部主责
    template: '<App/>'
})