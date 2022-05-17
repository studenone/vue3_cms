import { Module } from 'vuex'
import { ISystemState } from '../../types/main'
import { IRootState } from '../../types/index'

const systemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log('[test]', payload)
    },
  },
}

export default systemModule
