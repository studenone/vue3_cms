import { computed } from 'vue'
import { useStore } from '@/store/index'

const storeMap = new Map()

export function usePageContent(pageName: string) {
  const store = useStore()
  const userList = computed(() =>
    store.getters['system/pageListData'](pageName)
  )
  const userCount = computed(() =>
    store.getters['system/pageCountData'](pageName)
  )
  return [userList, userCount]
}
