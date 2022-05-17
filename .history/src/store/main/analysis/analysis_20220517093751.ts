import { Module } from 'vuex'
import type { IAnalysis, IRootState } from '../../types/index'

const analysisModule: Module<IAnalysis, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavorite: [],
      goodsAddressSale: [],
      goodsSaleTop10: [],
      topPanelData: [],
    }
  },
  mutations: {},
  actions: {},
}

export default analysisModule
