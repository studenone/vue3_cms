import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global/index' //封装ui按需引入
import { mcRequest } from './service/index' //封装axios请求
import 'normalize.css' // 直接引入第三方副作用，重置标签样式
import './assets/css/index.less' //引入自己的less文件

const app = createApp(App)

app.use(store).use(registerApp).use(router).mount('#app')

store.dispatch('login/loadStore') //初始化store数据
console.log('[request instance]', mcRequest)

// 确定请求返回的类型
// interface DataType {
//   data: {
//     title: string
//   }
// }
// 对axios的请求进行了较全面的封装
// mcRequest
//   .post<DataType>({
//     url: '/home',
//     // interceptor: {
//     //   requestInterceptor: (config) => {
//     //     console.log('[单独请求的拦截器]')
//     //     return config
//     //   },
//     //   responseInterceptor: (res) => {
//     //     console.log('[单独请求的返回拦截]')
//     //     return res
//     //   },
//     // },
//     // validateStatus: (status) => status < 300,
//     showLoading: true,
//   })
//   .then((res) => {
//     console.log(res.data.title)
//   })
//   .catch((error) => {
//     console.log('[status]', error)
//   }) // 单独请求的拦截比较少见
