import axios from 'axios'
import { BASE_NAME, BASE_URL } from './request/config'
// axios的拦截器，发送请求与接受结果时需要做一些额外操作
// 使用场景，接口需要携带token才能访问
// 请求时间较长，需要loading操作

// axios请求拦截器,fn1,发送请求成功会执行的函数，fn2，发送异常执行的函数
axios.interceptors.request.use(
  (config) => {
    // 此时可以做一些操作
    // 添加token
    // 显示loading组件之类的
    console.log('[request 成功]')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器，fn1，响应成功执行的操作，fn2，响应失败的操作
axios.interceptors.response.use(
  (res) => {
    console.log('[response 成功]')
    return res
  },
  (error) => Promise.reject(error)
)

// axios适配了ts，导出的是实例
// ts里promise被定义为可以有类型
// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => res)
axios.get('http://localhost:3000').then((res) => {
  console.log(res)
})

// 访问公开的http服务器
// axios.get('http://httpbin.org/get', {
//   params: {
//     name: 'coder',
//     age: 18,
//   },
// })
// axios.post('http://httpbin.org/post', {
//   data: {
//     name: 'coder',
//   },
// })

// axios的实例配置选项,生效顺序是方法的config-->defaults-->默认值
// 区分环境信息
console.log('[env get]', BASE_NAME, BASE_URL)
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 2500

// get请求，携带参数
const p1 = axios.get('/get', {
  params: {
    name: 'coder',
    age: 18,
  },
  timeout: 5000,
})

// axios.all的使用，多个请求一起返回
axios.all([p1]).then((res) => {
  console.log(res)
})
