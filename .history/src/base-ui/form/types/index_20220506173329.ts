type IFormItemEl = 'input' | 'datepicker' | 'password' | 'select'

export interface IFormItem {
  type: IFormItemEl
  label: string
  rules?: any[]
  placeholder: any
  // 针对特殊组件
  options?: any[]
  // 不同组件的特殊属性
}
