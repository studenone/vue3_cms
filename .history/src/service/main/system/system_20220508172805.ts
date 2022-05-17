import { mcRequest } from '../../index'

export function getPageListData(url: string, query: any) {
  return mcRequest.post({
    url: url,
    data: query,
  })
}
