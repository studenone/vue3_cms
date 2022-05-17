import type { IFormItem, IForm } from '@/base-ui/form/index'

const labelWidth = '80px'
const itemStyle = {
  padding: '10px 40px',
}
const colLayout = {
  span: 8,
}
const formItems: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名',
    filed: 'id',
  },
  {
    type: 'password',
    label: '密码',
    rules: [],
    placeholder: '请输入密码',
    filed: 'password',
  },
  {
    type: 'select',
    label: '爱好',
    rules: [],
    placeholder: '请输入运动',
    options: [
      {
        label: '篮球',
        value: 'basketball',
      },
      {
        label: '足球',
        value: 'football',
      },
    ],
    filed: '',
  },
  {
    type: 'datepicker',
    label: '创建时间',
    rules: [],
    placeholder: '请输入时间',
    otherOption: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange',
    },
    filed: 'time',
  },
]
// 整合为一个配置对象
const formConfig: IForm = {
  formItems,
  labelWidth,
  itemStyle,
  colLayout,
}

export default formConfig
