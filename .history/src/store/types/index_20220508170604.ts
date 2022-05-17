import type { ILoginState, IRootState } from './login'
import type { ISystemState } from './main'
export { IRootState }
export interface IRootAndModule extends IRootState {
  login: ILoginState
  system: ISystemState
}
