type IFormItemEl = 'input' | 'datepicker' | 'password' | 'select'

export interface IFormItem {
  label: string
  rules?: any[]
  placeholder: any
}
