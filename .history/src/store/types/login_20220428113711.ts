export interface IRootState {
  name: string
}

export interface ILoginState {
  token: string
  userInfo: any
  userMenu: any[]
}

export interface IAccount {
  name: string
  password: string
}

export interface IResponseType<T = any> {
  code: number
  data: T
}
