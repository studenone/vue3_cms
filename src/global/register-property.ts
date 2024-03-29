import type { App } from 'vue'
import { formatUtcTime } from '@/utils/date-format'

export default function (app: App<Element>) {
  // 添加全局方法，可以在模板里直接调用
  app.config.globalProperties.$filters = {
    formatTime(time: string) {
      return formatUtcTime(time)
    },
  }
}
