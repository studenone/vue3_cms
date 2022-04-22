import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 自定义接口
interface MCInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: <T = AxiosResponse>(config: T) => T //泛型函数
  responseInterceptorCatch?: (error: any) => any
}
// 拓展已有的接口，并且不改变原有接口，使用多态
interface MCRequestConfig extends AxiosRequestConfig {
  interceptor?: MCInterceptor
  showLoading?: boolean
}

export { MCInterceptor, MCRequestConfig }
