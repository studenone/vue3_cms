import { createStore } from 'vuex'
import type { IRootState } from './types/login'
import login from './login/login'

export default createStore<IRootState>({
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
