import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'
import Workbench from '@/views/dashboard/workbench/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Layout,
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
