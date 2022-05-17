import { ref } from 'vue'
import PageContent from '@/components/page-content/index'

type ISearch = [n1: <InstanceType<typeof PageContent>>, n2: () => void]

// 在业务组件里调用网络请求
export function usePageSearch() {
  const pageContent = ref<InstanceType<typeof PageContent>>() //要暴露在渲染上下文中
  const handleQuery = (info: any) => {
    pageContent.value?.getPageData(info)
  }
  return [pageContent, handleQuery]
}
