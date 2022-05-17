import { Module } from 'vuex'
import { ISystemState } from '../../types/main'
import { IRootState } from '../../types/index'
import { getPageListData } from '@/service/main/system/system'

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
    async getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
      const res = await getPageListData
      console.log('[res]', res)
    },
  },
}

export default systemModule
