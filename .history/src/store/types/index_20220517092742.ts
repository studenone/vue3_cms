import { IAnalysis } from './analysis'
import type { ILoginState, IRootState, IResponseType } from './login'
import type { ISystemState } from './main'
export * from './analysis'
export { IRootState, IResponseType }
export interface IRootAndModule extends IRootState {
  login: ILoginState
  system: ISystemState
  analysis: IAnalysis
}
