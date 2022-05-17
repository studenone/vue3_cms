import type { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
]

export default function (app: App<Element>) {
  for (const iterator of components) {
    app.component(iterator.name, iterator)
  }
}
