import { mcRequest } from '../../index'

enum AnalysisAPI {
  CategoryGoodsCount = '/goods/category/count',
  CategoryGoodsSale = '/goods/category/sale',
  CategoryGoodsFavorite = '/goods/category/favor',
  GoodsAddressSale = '/goods/category/count',
  GoodsSaleTop10 = '/goods/category/count',
  TopPanelData = '/goods/category/count',
}

export function getCategoryGoodsCount() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getCategoryGoodsSale() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getCategoryGoodsFavorite() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getGoodsAddressSale() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getGoodsSaleTop10() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getTopPanelData() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
