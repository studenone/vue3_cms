import { mcRequest } from '../../index'

// 获取列表信息
export function getPageListData<T = any>(url: string, query: any) {
  return mcRequest.post<T>({
    url: url,
    data: query,
  })
}

// 删除列表信息
export function deletePageListData<T = any>(url: string) {
  return mcRequest.delete<T>({
    url: url,
  })
}
