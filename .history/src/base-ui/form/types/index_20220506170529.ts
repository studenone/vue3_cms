type IFormItemEl = 'input' | 'datepicker' | 'password' | 'select'

export interface IFormItem {
  type: IFormItemEl
  label: string
  rules?: any[]
  placeholder: any
}
