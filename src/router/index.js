import Vue from 'vue'
import Router from 'vue-router'
import navigate from '@/components/navigate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: navigate
    }
  ]
})
