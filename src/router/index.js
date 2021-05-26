import Vue from 'vue'
import Router from 'vue-router'
import navigate from '@/components/navigate'
import ProjectManage from '@/pages/ProjectManage'
import CodeRelease from '@/pages/CodeRelease'
import CodeReleaseDetail from '@/pages/CodeReleaseDetail'
import CodeMerge from '@/pages/CodeMerge'
import CodePackage from '@/pages/CodePackage'
import CodeDeploy from '@/pages/CodeDeploy'
import CodeClean from '@/pages/CodeClean'
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
            component: CodeReleaseDetail,
            children: [{
                    path: 'codeMerge',
                    component: CodeMerge
                },
                {
                    path: 'codePackage',
                    component: CodePackage
                },
                {
                    path: 'codeDeploy',
                    component: CodeDeploy
                }, {
                    path: 'codeClean',
                    component: CodeClean
                }
            ]
        }]
    }]
})