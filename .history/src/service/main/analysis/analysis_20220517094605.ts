import { mcRequest } from '../../index'

enum AnalysisAPI {}

export function getCategoryGoodsCount() {
  return mcRequest.get()
}
