import { Module } from 'vuex'
import type { IAnalysis, IRootState } from '../../types/index'

const analysisModule: Module<IAnalysis, IRootState> = {
  namespace: true,
}
