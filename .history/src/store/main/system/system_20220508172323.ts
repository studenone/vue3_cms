import { Module } from 'vuex'
import { ISystemState } from '../../types/main'
import { IRootState } from '../../types/index'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },
  actions: {
    // 请求接口基本
    getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
    },
  },
}

export default systemModule
