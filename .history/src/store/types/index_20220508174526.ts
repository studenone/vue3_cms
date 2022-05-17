import type { ILoginState, IRootState, IResponseType } from './login'
import type { ISystemState } from './main'
export { IRootState, IResponseType }
export interface IRootAndModule extends IRootState {
  login: ILoginState
  system: ISystemState
}
