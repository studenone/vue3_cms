import { ref } from 'vue'
import PageContent from '@/components/page-content/index'

type ISearch = [n1: any, n2: (arg: any) => void, n3: any, n4: () => void]

// 在业务组件里调用网络请求
export function usePageSearch(): ISearch {
  const pageContent = ref<InstanceType<typeof PageContent>>() //要暴露在渲染上下文中
  const searchInfo = ref({})
  const handleQuery = (info: any) => {
    searchInfo.value = info
    pageContent.value?.resetPageInfo()
    pageContent.value?.getPageData(info)
  }
  const handleReset = () => {
    pageContent.value?.resetPageInfo()
  }
  return [pageContent, handleQuery, searchInfo, handleReset]
}
