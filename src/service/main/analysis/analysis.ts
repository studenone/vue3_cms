import { mcRequest } from '../../index'

enum AnalysisAPI {
  CategoryGoodsCount = '/goods/category/count',
  CategoryGoodsSale = '/goods/category/sale',
  CategoryGoodsFavorite = '/goods/category/favor',
  GoodsAddressSale = 'goods/address/sale',
  GoodsSaleTop10 = '/goods/sale/top10',
  TopPanelData = '/goods/amount/list',
}

export function getCategoryGoodsCount<T = any>() {
  return mcRequest.get<T>({
    url: AnalysisAPI.CategoryGoodsCount,
  })
}
export function getCategoryGoodsSale<T = any>() {
  return mcRequest.get<T>({
    url: AnalysisAPI.CategoryGoodsSale,
  })
}
export function getCategoryGoodsFavorite<T = any>() {
  return mcRequest.get<T>({
    url: AnalysisAPI.CategoryGoodsFavorite,
  })
}
export function getGoodsAddressSale<T = any>() {
  return mcRequest.get<T>({
    url: AnalysisAPI.GoodsAddressSale,
  })
}
export function getGoodsSaleTop10<T = any>() {
  return mcRequest.get<T>({
    url: AnalysisAPI.GoodsSaleTop10,
  })
}
export function getTopPanelData<T = any>() {
  return mcRequest.get<T>({
    url: AnalysisAPI.TopPanelData,
  })
}
