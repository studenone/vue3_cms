import type { App } from 'vue'
import registerElement from './register-element'
import registerProperty from './register-property'

export function registerApp(app: App<Element>): void {
  registerElement(app)
  registerProperty(app)
}
