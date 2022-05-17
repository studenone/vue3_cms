import { computed } from 'vue'
import { useStore } from '@/store/index'

const storeMap = new Map()
storeMap.set('users', 'system')
storeMap.set('role', 'system')
storeMap.set('goods', 'system')
storeMap.set('menu', 'system')

export function usePageContent(pageName = 'users') {
  const store = useStore()
  const userList = computed(() =>
    store.getters[storeMap.get(pageName) + '/pageListData'](pageName)
  )
  const userCount = computed(() =>
    store.getters[storeMap.get(pageName) + '/pageCountData'](pageName)
  )
  return [userList, userCount]
}
