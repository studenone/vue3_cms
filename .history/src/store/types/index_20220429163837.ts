import type { ILoginState, IRootState } from './login'

export interface IRootAndModule extends IRootState {
  login: ILoginState
}
