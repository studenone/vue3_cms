import { Module } from 'vuex'
import type { IAnalysis, IRootState } from '../../types/index'

const analysisModule: Module<IAnalysis, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: any[]
      categoryGoodsSale: any[]
      categoryGoodsFavorite: any[]
      goodsAddressSale: any[]
      goodsSaleTop10: any[]
      topPanelData: any[]
    }
  },
}

export default analysisModule
