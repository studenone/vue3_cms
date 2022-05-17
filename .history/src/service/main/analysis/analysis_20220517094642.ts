import { mcRequest } from '../../index'

enum AnalysisAPI {
  CategoryGoodsCount = '/goods/category/count',
}

export function getCategoryGoodsCount() {
  return mcRequest.get()
}
