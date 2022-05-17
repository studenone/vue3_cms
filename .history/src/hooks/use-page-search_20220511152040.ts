import { ref } from 'vue'
import PageContent from '@/components/page-content/index'

// 在业务组件里调用网络请求
export function usePageSearch(refName: string) {
  const refName = ref<InstanceType<typeof PageContent>>() //要暴露在渲染上下文中
  const handleQuery = (value: any) => {
    console.log('[handle]', value, refName.value)
    refName.value?.getPageData(value)
  }
  return {
    refName,
    handleQuery,
  }
}
