import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global/index' //封装ui按需引入
import { mcRequest } from './service/index'

const app = createApp(App)

app.use(store).use(router).mount('#app')
registerApp(app)

console.log('[request instance]', mcRequest)

// 确定请求返回的类型
interface DataType {
  data: {
    title: string
  }
}
// 对axios的请求进行了较全面的封装
mcRequest
  .post<DataType>({
    url: '/home',
    // interceptor: {
    //   requestInterceptor: (config) => {
    //     console.log('[单独请求的拦截器]')
    //     return config
    //   },
    //   responseInterceptor: (res) => {
    //     console.log('[单独请求的返回拦截]')
    //     return res
    //   },
    // },
    // validateStatus: (status) => status < 300,
    showLoading: true,
  })
  .then((res) => {
    console.log(res.data.title)
  })
  .catch((error) => {
    console.log('[status]', error)
  }) // 单独请求的拦截比较少见
