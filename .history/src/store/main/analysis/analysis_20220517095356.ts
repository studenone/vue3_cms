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
  mutations: {},
  actions: {
    // 获取图表数据
    getAnalysisDataAction({ commit }) {
      console.log('[获取图表数据]')
    },
  },
}

export default analysisModule
