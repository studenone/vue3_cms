import { mcRequest } from '../../index'

export function getPageListData(url: string, query: any) {
  mcRequest.post({
    url: url,
    data: query,
  })
}
