type IFormItemEl = 'input' | 'datepicker' | 'password' | 'select'

export interface IFormItem {
  type: IFormItemEl
  label: string
  rules?: any[]
  placeholder: any
  // 针对特殊组件
  options?: any[]
}
