// 1、使用process.env.NODE_ENV
let BASE_URL = ''
let BASE_NAME = ''
const TIME_OUT = 5000

console.log('[node_env]', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:4000'
  BASE_NAME = 'james'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
  BASE_NAME = 'jenny'
} else {
  BASE_URL = 'http://httpbin.org/test'
  BASE_NAME = 'master'
}

export { BASE_URL, BASE_NAME, TIME_OUT }
