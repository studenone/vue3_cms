import { Module } from 'vuex'
import { ISystemState } from '../../types/main'
import { IRootState, IResponseType } from '../../types/index'
import {
  getPageListData,
  deletePageListData,
} from '@/service/main/system/system'
import { unity } from '@/utils/unity'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    }
  },
  getters: {
    // 使用getters返回函数的特性，让页面自己填入参数
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[pageName + 'List']
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[pageName + 'Count']
      }
    },
  },
  mutations: {
    changeUsersList(state, payload: any[]) {
      state.usersList = payload
    },
    changeUsersCount(state, payload: any) {
      state.usersCount = payload
    },
    changeRoleList(state, payload: any[]) {
      state.roleList = payload
    },
    changeRoleCount(state, payload: any) {
      state.roleCount = payload
    },
    changeGoodsList(state, payload: any[]) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload: any) {
      state.goodsCount = payload
    },
    changeMenuList(state, payload: any[]) {
      state.menuList = payload
    },
    changeMenuCount(state, payload: any) {
      state.menuCount = payload
    },
  },
  actions: {
    // 请求接口结构基本一致,逻辑一致的列表请求接口
    async getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
      // 1、获取page name
      payload.pageUrl = '/' + payload.pageName + '/list'
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
      const upPageName =
        payload.pageName[0].toUpperCase() + payload.pageName.slice(1)
      commit(`change${upPageName}List`, list)
      commit(`change${upPageName}Count`, totalCount)
    },
    // 删除列表数据操作
    async deletePageListAction({ dispatch }, payload: any) {
      // 1、删除用户数据 users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      const [err, res] = await unity(deletePageListData<IResponseType>(pageUrl))
      if (err !== null) {
        console.log('[error]', err)
        return
      }
      // 2、重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      })
      return res
    },
  },
}

export default systemModule
