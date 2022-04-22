// 将请求的各种模式封装至类
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { MCInterceptor, MCRequestConfig } from './types' // 导入自定义类型
import { ElLoading } from 'element-plus' // 导入loading组件
import 'element-plus/es/components/loading/style/css'

const TRUE = true
const FALSE = false
// axios导出来本身是一个实例，他也集成了创建实例的方法
class MCRequest {
  private instance: AxiosInstance
  private interceptors?: MCInterceptor
  private loading: any = null
  private showLoading = FALSE
  // 根据config生成不同实例，拦截器也该配置(login页面需要信息提示，其他页面可能只需要验证token)
  constructor(config?: MCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptor //保存注册的拦截器
    this.showLoading = config?.showLoading ?? FALSE
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    ) //注册拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 调用服务前显示loading页面
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '请求数据中',
            background: 'rgba(0, 0, 0, 0.7)',
            target: document.getElementById('#app') || '#app',
          })
        }
        return config
      },
      (error) => error
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 关闭loading
        if (this.showLoading) {
          setTimeout(() => {
            this.loading.close()
          }, 3000)
        }
        const data = res.data
        // 对响应数据进行预处理
        if (data.code === '1001') {
          alert('请求失败' + data.message)
        }
        // 解包axios封装的响应对象
        return res.data
      },
      (error) => {
        // 对响应返回错误信息时的拦截处理
        // 关闭loading
        if (this.showLoading) {
          setTimeout(() => {
            this.loading.close()
          }, 3000)
        }
        if (error.response.status === 404) {
          alert('服务错误')
        }
        return error
      }
    )
  }
  // 对axios对应方法进行改造，可以单独传入拦截器(单纯同步代码)
  request<T>(config: MCRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 这个不能算真正的拦截器，只能算前置代码
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }
      // 单个请求添加loading
      if (config.showLoading) {
        this.showLoading = TRUE
      }
      // 对promise传类型，确定返回我们想要的数据类型,类型不匹配，使用泛型兼容
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }
          this.showLoading = FALSE
          // 将结果resolve返回,泛型
          resolve(res)
          return res
        })
        .catch((error) => {
          // 返回error
          reject(error)
        })
    })
  }

  get<T>(config: MCRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 这个不能算真正的拦截器，只能算前置代码
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }
      // 单个请求添加loading
      if (config.showLoading) {
        this.showLoading = TRUE
      }
      this.instance
        .request<any, T>({ ...config, method: 'get' })
        .then((res) => {
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }
          this.showLoading = FALSE
          // 将结果resolve返回,泛型
          resolve(res)
          return res
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  post<T>(config: MCRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 这个不能算真正的拦截器，只能算前置代码
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }
      // 单个请求添加loading
      if (config.showLoading) {
        this.showLoading = TRUE
      }
      this.instance
        .request<any, T>({ ...config, method: 'post' })
        .then((res) => {
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }
          this.showLoading = FALSE
          // 将结果resolve返回,泛型
          resolve(res)
          return res
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default MCRequest
