import { computed } from 'vue'
import { useStore } from '@/store/index'

export function usePageContent(pageName: string) {
  const userList = computed(() =>
    store.getters['system/pageListData'](props.pageName)
  )
  const userCount = computed(() =>
    store.getters['system/pageCountData'](props.pageName)
  )
}
