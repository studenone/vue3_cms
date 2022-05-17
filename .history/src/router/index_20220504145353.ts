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
    children: [], // 写死路径，不符合最小授权原则
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
