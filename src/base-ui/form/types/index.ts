type IFormItemEl = 'input' | 'datepicker' | 'password' | 'select'

export interface IFormItem {
  type: IFormItemEl
  label: string
  rules?: any[]
  placeholder: any
  // 针对特殊组件
  options?: any[]
  // 不同组件的特殊属性
  otherOption?: any
  // 控制表单字段
  field: string
  // 控制是否隐藏
  isHidden?: boolean
}

// 定义一个综合的configure类型
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
