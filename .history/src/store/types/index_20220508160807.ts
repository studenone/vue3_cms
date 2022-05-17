import type { ILoginState, IRootState } from './login'

export { IRootState }
export interface IRootAndModule extends IRootState {
  login: ILoginState
}
