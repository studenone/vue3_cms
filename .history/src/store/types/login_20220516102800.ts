export interface IRootState {
  name: string
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface ILoginState {
  token: string
  userInfo: any
  userMenu: any[]
  permissions: any[]
}

export interface IAccount {
  name: string
  password: string
}

export interface IResponseType<T = any> {
  code: number
  data: T
}
