import type { IFormItem, IForm } from '@/base-ui/form/index'

const labelWidth = '80px'
const itemStyle = {
  padding: '10px 40px',
}
const colLayout = {
  span: 8,
}
const formItems: IFormItem[] = [
  // {
  //   type: 'input',
  //   label: 'id',
  //   rules: [],
  //   placeholder: '请输入id',
  //   field: 'id',
  // },
  {
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名',
    field: 'name',
  },
  {
    type: 'input',
    label: '真实姓名',
    rules: [],
    placeholder: '请输入真实姓名',
    field: 'realname',
  },
  {
    type: 'input',
    label: '手机号',
    rules: [],
    placeholder: '请输入手机号',
    // options: [
    //   {
    //     label: '篮球',
    //     value: 'basketball',
    //   },
    //   {
    //     label: '足球',
    //     value: 'football',
    //   },
    // ],
    field: 'cellphone',
  },
  {
    type: 'select',
    label: '可用',
    rules: [],
    placeholder: '请输入id',
    options: [
      { label: '可用', value: 1 },
      { label: '禁用', value: 0 },
    ],
    field: 'enable',
  },
  {
    type: 'datepicker',
    label: '创建时间',
    rules: [],
    placeholder: '请输入时间',
    // otherOption: {
    //   startPlaceholder: '开始时间',
    //   endPlaceholder: '结束时间',
    //   type: 'daterange',
    // },
    field: 'time',
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
