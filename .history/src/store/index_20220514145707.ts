import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState } from './types/login'
import type { IRootAndModule } from './types/index'
import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'master',
      entireDepartment: [], //全量部门数据
      entireRole: [],
    }
  },
  getters: {
    firstName() {
      return 'hello'
    },
    fullName(state, getters) {
      console.log(getters)
      return state.name
    },
  },
  mutations: {},
  actions: {
    // 获取初始数据
    async getInitialDataAction() {
      // 请求部门及角色数据
      const { list } = await getPageListData('/department/list', {
        offset: 0,
        size: 1000,
      })
      const {} = await getPageListData('/department/list', {
        offset: 0,
        size: 1000,
      })
    },
  },
  modules: {
    login,
    system,
  },
})

export default store

export function setupStore() {
  store.dispatch('login/loadStore') //初始化store数据
}

export function useStore(): Store<IRootAndModule> {
  return useVuexStore()
}
