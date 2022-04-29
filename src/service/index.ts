import MCRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config' //配置不同环境的baseurl
import localCache from '@/utils/cache'
// service 出口
const mcRequest = new MCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      // 取出缓存的token
      const token = localCache.getCache('cms_token') //携带上token
      if (token) {
        ;(config.headers as any).Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => error,
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => error,
  },
}) //实例的基础配置

// 对拦截器的层层封装,内部实现使用数组模拟栈的执行
// 服务器返回数据，可能附带状态码字段或错误字段，http码一直200，具体信息返回
// 通过http码返回错误信息，可能暴露系统内部信息
export { mcRequest }
