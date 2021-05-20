import Vue from 'vue'
import Router from 'vue-router'
import navigate from '@/components/navigate'
import ProjectManage from '@/pages/ProjectManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: navigate,
      children: [
        {
          path: 'aa',
          component: ProjectManage
        }
      ]
    }
  ]
})
