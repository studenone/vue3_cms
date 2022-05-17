const menu = () => import('@/views/main/system/menu/menu.vue')
console.log('[menu]', menu)

export default {
  path: '/main/system/menu',
  name: 'menu',
  component: menu,
  children: [],
}
