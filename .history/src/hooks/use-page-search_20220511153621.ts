import { ref } from 'vue'
import PageContent from '@/components/page-content/index'

type IContent = InstanceType<typeof PageContent>
type ISearch = [n1: IContent, n2: (arg: any) => void]

// 在业务组件里调用网络请求
export function usePageSearch(): ISearch {
  const pageContent = ref<InstanceType<typeof PageContent>>() //要暴露在渲染上下文中
  const handleQuery = (info: any) => {
    pageContent.value?.getPageData(info)
  }
  return [pageContent, handleQuery]
}
