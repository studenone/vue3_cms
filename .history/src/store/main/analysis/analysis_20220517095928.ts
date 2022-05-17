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
    changeCategoryGoodsSale(state, payload: any[]) {
      state.categoryGoodsSale = payload
    },
    changeCategoryGoodsFavorite(state, payload: any[]) {
      state.categoryGoodsFavorite = payload
    },
    changeGoodsAddressSale(state, payload: any[]) {
      state.goodsAddressSale = payload
    },
    changeGoodsSaleTop10(state, payload: any[]) {
      state.goodsSaleTop10 = payload
    },
    changeTopPanelData(state, payload: any[]) {
      state.topPanelData = payload
    },
  },
  actions: {
    // 获取图表数据
    async getAnalysisDataAction({ commit }) {
      const goodsCountRes = await getCategoryGoodsCount()
      const goodsSaleRes = await getCategoryGoodsSale()
      const goodsFavRes = await getCategoryGoodsFavorite()
      const goodsAddressRes = await getGoodsAddressSale()
    },
  },
}

export default analysisModule
