import { mcRequest } from '../../index'

// 获取列表信息
export function getPageListData<T>(url: string, query: any) {
  return mcRequest.post<T>({
    url: url,
    data: query,
  })
}
