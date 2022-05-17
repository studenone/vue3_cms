import { mcRequest } from '../../index'

// 获取列表信息
export function getPageListData<T = any>(url: string, query: any) {
  return mcRequest.post<TextDecoder>({
    url: url,
    data: query,
  })
}
