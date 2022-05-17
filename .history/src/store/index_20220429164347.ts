import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState } from './types/login'
import type { IRootAndModule } from './types/index'
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'master',
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
  actions: {},
  modules: {
    login,
  },
})

export default store

export function setupStore() {
  store.dispatch('login/loadStore') //初始化store数据
}

export function useStore(): Store<IRootAndModule> {
  return useVuexStore()
}
