import Vue from 'vue'
import Router from 'vue-router'
import navigate from '@/components/navigate'
import ProjectManage from '@/pages/ProjectManage'
import CodeRelease from '@/pages/CodeRelease'
import CodeReleaseDetail from '@/pages/CodeReleaseDetail'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: navigate,
        children: [{
            path: 'projectSetting',
            component: ProjectManage,
        }, {
            path: 'codeRelease',
            component: CodeRelease
        }, {
            path: 'codeReleaseDetail',
            component: CodeReleaseDetail
        }]
    }]
})