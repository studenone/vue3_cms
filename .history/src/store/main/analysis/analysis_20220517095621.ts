import { Module } from 'vuex'
import type { IAnalysis, IRootState } from '../../types/index'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavorite,
  getGoodsAddressSale,
} from '@/service/main/analysis/analysis'

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
  mutations: {
    changeCategoryGoodsCount(state, payload: any[]) {
      state.categoryGoodsCount = payload
    },
  },
  actions: {
    // 获取图表数据
    async getAnalysisDataAction({ commit }) {
      const res = await getCategoryGoodsCount()
      console.log('[获取图表数据]', res)
    },
  },
}

export default analysisModule
