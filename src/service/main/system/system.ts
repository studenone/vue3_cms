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

// 创建列表信息
export function createPageListData<T = any>(url: string, data: any) {
  return mcRequest.post<T>({
    url: url,
    data: data,
  })
}

// 编辑列表信息
export function editPageListData<T = any>(url: string, data: any) {
  return mcRequest.patch<T>({
    url: url,
    data: data,
  })
}
