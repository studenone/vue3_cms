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
      roleList: [],
      roleCount: 0,
    }
  },
  mutations: {
    changeUserList(state, payload: any[]) {
      state.userList = payload
    },
    changeUserCount(state, payload: any) {
      state.userCount = payload
    },
    changeRoleList(state, payload: any[]) {
      state.roleList = payload
    },
    changeRoleCount(state, payload: any) {
      state.roleCount = payload
    },
  },
  actions: {
    // 请求接口结构基本一致,逻辑一致的列表请求接口
    async getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
      // 1、获取page name
      if (payload.pageName === 'user') {
        payload.pageUrl = '/' + payload.pageName + 's/list'
      }
      // 2、发送对应请求
      const [err, res] = await unity(
        getPageListData<IResponseType>(payload.pageUrl, {
          ...payload.queryInfo,
        })
      )
      if (err !== null) {
        console.log('[error]', err)
      }
      const { list, totalCount } = res.data
      // 3、修改对应state
      commit(`change${payload.pageName.toUpperCase()}List`, list)
      commit(`change${payload.pageName.toUpperCase()}Count`, totalCount)
    },
  },
}

export default systemModule
