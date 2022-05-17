/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 定义自己的类型
// interface App<T> {
//   component(name: string, app: any): void
// }

declare module '*.json'
