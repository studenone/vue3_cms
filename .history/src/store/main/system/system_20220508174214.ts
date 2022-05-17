import { Module } from 'vuex'
import { ISystemState } from '../../types/main'
import { IRootState } from '../../types/index'
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
  actions: {
    // 请求接口结构基本一致
    async getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
      getPageListData(payload.pageUrl, {
        ...payload.queryInfo,
      })
      const [err, res] = await unity(
        new Promise((res, rej) => {
          rej('错误')
        })
      )
      console.log('[res]', res, err)
    },
  },
}

export default systemModule
