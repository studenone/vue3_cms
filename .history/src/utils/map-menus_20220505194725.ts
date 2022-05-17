import type { RouteRecordRaw } from 'vue-router'

export default function mapMenusToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1、加载自己定义的默认组件
  const allRoutes: RouteRecordRaw[] = []
  console.log('c%', '你好')

  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    console.log('[require]', key)
  })
  // 2、根据菜单匹配到需要添加的route
  return routes
}
