import type { RouteRecordRaw } from 'vue-router'

export default function mapMenusToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1、加载自己定义的默认组件
  const allRoutes: RouteRecordRaw[] = []
  console.log('c%', '你好')

  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 使用webpack方法获取文件路径
  routeFiles.keys().forEach((key) => {
    // 获取正确的路径信息
    const route = require('../router/main' + key.split('.')[1])
  })
  // 2、根据菜单匹配到需要添加的route
  return routes
}
