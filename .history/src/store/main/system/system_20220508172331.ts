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
    // 请求接口结构基本一致
    getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
    },
  },
}

export default systemModule
