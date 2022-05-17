import { mcRequest } from '../../index'

enum AnalysisAPI {
  CategoryGoodsCount = '/goods/category/count',
  CategoryGoodsSale = '/goods/category/sale',
  CategoryGoodsFavorite = '/goods/category/favor',
  GoodsAddressSale = 'goods/address/sale',
  GoodsSaleTop10 = '/goods/sale/top10',
  TopPanelData = '/goods/amount/list',
}

export function getCategoryGoodsCount() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getCategoryGoodsSale() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsSale,
  })
}
export function getCategoryGoodsFavorite() {
  return mcRequest.get({
    url: AnalysisAPI.CategoryGoodsFavorite,
  })
}
export function getGoodsAddressSale() {
  return mcRequest.get({
    url: AnalysisAPI.GoodsAddressSale,
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
