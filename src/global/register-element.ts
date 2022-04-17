import { ElButton, ElTable } from 'element-plus'
import type { App } from 'vue'
const components = [ElButton, ElTable]

export default function (app: App<Element>) {
  for (const iterator of components) {
    app.component(iterator.name, iterator)
  }
}
