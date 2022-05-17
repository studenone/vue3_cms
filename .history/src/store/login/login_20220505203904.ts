import type { Module } from 'vuex'
import type {
  ILoginState,
  IRootState,
  IAccount,
  IResponseType,
} from '../types/login'
import {
  accountLoginRequest,
  getCurrentUserInfoById,
  getCurrentUserMenuById,
} from '../../service/login/login'
import localCache from '@/utils/cache'
import mapMenusToRoute from '@/utils/map-menus'
import router from '@/router/index'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: [],
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeInfo(state, payload: any) {
      state.userInfo = payload
    },
    changeMenu(state, payload: any) {
      state.userMenu = payload
      // 5、得到对应菜单路由映射表
      const routes = mapMenusToRoute(payload)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      console.log('[my router]', router)
    },
  },
  actions: {
    async accountLogin({ commit }, payload: IAccount) {
      // 1、取得登录返回的信息
      const res = await accountLoginRequest<IResponseType>(payload)
      const { token, id } = res.data
      // 保存token
      commit('changeToken', token)
      localCache.setCache('cms_token', token)
      // 2、请求用户信息
      const userInfo = await getCurrentUserInfoById<IResponseType>(id)
      commit('changeInfo', userInfo.data)
      localCache.setCache('cms_userInfo', userInfo.data)
      // 3、得到用户菜单
      const userMenu = await getCurrentUserMenuById<IResponseType>(
        userInfo.data.role.id
      )
      commit('changeMenu', userMenu.data)
      localCache.setCache('cms_userMenu', userMenu.data)
      // 4、跳转至首页
      router.push('/main')
    },
    phoneLogin({ commit }, payload: any) {
      console.log('执行登录', payload, commit)
    },
    loadStore({ commit }) {
      const token = localCache.getCache('cms_token')
      const userInfo = localCache.getCache('cms_userInfo')
      const userMenu = localCache.getCache('cms_userMenu')
      const map = new Map([])
      map.set('changeToken', token)
      map.set('changeInfo', userInfo)
      map.set('changeMenu', userMenu)
      map.forEach((value, key) => {
        if (value) {
          commit(key as string, value)
        }
      })
    },
  },
}

export default loginModule
