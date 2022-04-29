import { mcRequest } from '../index'
import type { IAccount } from '../types/login'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //'/users/:id'
  UserMenus = '/role/', // '/role/:id/menu'
}

/**
 * 账户登录
 * @param account
 * @returns
 */
export function accountLoginRequest<T>(account: IAccount) {
  return mcRequest.post<T>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true,
  })
}

/**
 * 获取用户信息
 * @param id 用户id
 * @returns
 */
export function getCurrentUserInfoById<T>(id: number) {
  return mcRequest.get<T>({
    url: LoginAPI.LoginUserInfo + id,
  })
}

/**
 * 获取权限
 * @param id 权限id
 */
export function getCurrentUserMenuById<T>(id: number) {
  return mcRequest.get<T>({
    url: LoginAPI.UserMenus + id + '/menu',
  })
}
