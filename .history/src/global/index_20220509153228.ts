import type { App } from 'vue'
import registerElement from './register-element'
import  from './register-property'

export function registerApp(app: App<Element>): void {
  registerElement(app)
}
