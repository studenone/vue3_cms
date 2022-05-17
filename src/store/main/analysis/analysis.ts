import { Module } from 'vuex'
import type { IAnalysis, IRootState, IResponseType } from '../../types/index'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavorite,
  getGoodsAddressSale,
  getTopPanelData,
  getGoodsSaleTop10,
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
      const goodsCountRes = await getCategoryGoodsCount<IResponseType>()
      const goodsSaleRes = await getCategoryGoodsSale<IResponseType>()
      const goodsFavRes = await getCategoryGoodsFavorite<IResponseType>()
      const goodsAddressRes = await getGoodsAddressSale<IResponseType>()
      const goodsTopRes = await getGoodsSaleTop10<IResponseType>()
      const goodsPanelRes = await getTopPanelData<IResponseType>()
      commit('changeCategoryGoodsCount', goodsCountRes.data)
      commit('changeCategoryGoodsSale', goodsSaleRes.data)
      commit('changeCategoryGoodsFavorite', goodsFavRes.data)
      commit('changeGoodsAddressSale', goodsAddressRes.data)
      commit('changeGoodsSaleTop10', goodsTopRes.data)
      commit('changeTopPanelData', goodsPanelRes.data)
    },
  },
}

export default analysisModule
