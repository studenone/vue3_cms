import { Module } from 'vuex'
import { ISystemState } from '../../types/main'
import { IRootState, IResponseType } from '../../types/index'
import { getPageListData } from '@/service/main/system/system'
import { unity } from '@/utils/unity'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },
  mutations: {
    changeUserList(state, paylaod: any[]) {
      state.userList = paylaod
    },
  },
  actions: {
    // 请求接口结构基本一致
    async getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
      const [err, res] = await unity(
        getPageListData<IResponseType>(payload.pageUrl, {
          ...payload.queryInfo,
        })
      )
      const { list, totalCount } = res.data
    },
  },
}

export default systemModule
