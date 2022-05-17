import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: [], // 1、写死路径，不符合最小授权原则,2、前端分配角色路由，不符合数据表管理的实际3、后端表配置角色时，对应url，根据返回的权限，注册动态路由
  },
  {
    path: '',
    component: () => import('@/components/not-found/index'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 在这里做token是否过期或存在的检查
    const token = localCache.getCache('cms_token')
    if (!token) {
      console.log('[guard]', to)
      return '/login'
    }
  }
})

export default router
