import type { RouteRecordRaw } from 'vue-router'

export default function mapMenusToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1、加载自己定义的默认组件
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 2、根据菜单匹配到需要添加的route
  return routes
}
