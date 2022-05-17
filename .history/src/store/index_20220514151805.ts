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
  mutations: {
    changeEntireDepartment(state, payload: any[]) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload: any[]) {
      state.entireRole = payload
    },
  },
  actions: {
    // 获取初始数据
    async getInitialDataAction({ commit }) {
      // 请求部门及角色数据
      const departmentRes = await getPageListData('/department/list', {
        offset: 0,
        size: 100,
      })
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 100,
      })
      const { list: departmentList } = departmentRes.data
      const { list: roleList } = roleRes.data
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
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
  store.dispatch('getInitialDataAction') //初始化store数据
}

export function useStore(): Store<IRootAndModule> {
  return useVuexStore()
}
