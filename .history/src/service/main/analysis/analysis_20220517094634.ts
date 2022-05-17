import { mcRequest } from '../../index'

enum AnalysisAPI {
  CategoryGoodsCount = '',
}

export function getCategoryGoodsCount() {
  return mcRequest.get()
}
