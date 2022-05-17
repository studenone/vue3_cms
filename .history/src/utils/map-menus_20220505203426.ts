import type { RouteRecordRaw } from 'vue-router'

export default function mapMenusToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [] //此次应该加载的组件
  // 1、加载自己定义的默认组件
  const allRoutes: RouteRecordRaw[] = []

  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 2、使用webpack方法获取文件路径
  routeFiles.keys().forEach((key) => {
    // 3、获取正确的路径信息,加载路由跟组件
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log('[all files] ', allRoutes)
  // 4、根据菜单匹配到需要添加的route
  // 使用递归匹配路由
  const _recurseGetRote = (menus: any[]) => {
    for (const item of menus) {
      if (item.type === 2) {
        const route = allRoutes.find((route) => route.path === item.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRote(item.children)
      }
    }
  }
  _recurseGetRote(userMenus)
  console.log('[my route]', routes)

  return routes
}
