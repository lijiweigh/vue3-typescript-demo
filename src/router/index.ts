import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'
import Workbench from '@/views/dashboard/workbench/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/workbench',
    meta: {
      title: 'dashboard',
      icon: 'HomeOutlined'
    },
    children: [
      {
        name: 'workbench1',
        path: 'workbench',
        component: Workbench,
        meta: {
          title: '工作台'
        }
      },
      {
        name: 'workbench2',
        path: 'workbench2',
        component: Workbench,
        meta: {
          title: '工作台2'
        }
      },
      {
        name: 'workbench3',
        path: 'workbench3',
        component: Workbench,
        meta: {
          title: '工作台3'
        }
      },
    ]
  },
  {
    name: 'form',
    path: '/form',
    component: Layout,
    redirect: '/form/form-list',
    meta: {
      title: '表单页',
      icon: 'HomeOutlined'
    },
    children: [
      {
        name: 'createForm',
        path: 'create',
        component: () => import('@/views/form/create.vue'),
        meta: {
          title: '创建页表单'
        }
      },
      {
        name: 'formList',
        path: 'form-list',
        component: () => import('@/views/form/form-list.vue'),
        meta: {
          title: '表单列表'
        }
      },
      {
        name: 'formDetail',
        path: 'form-detail/:id',
        component: () => import('@/views/form/form-detail.vue'),
        meta: {
          title: '表单详情',
          hideInMenu: true,
          preBreadCrumb: {
            path: '/form/form-list',
            breadcrumbName: '表单列表'
          }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
