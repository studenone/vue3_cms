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
    label: '密码',
    rules: [],
    placeholder: '请输入密码',
    field: 'password',
  },
  {
    type: 'input',
    label: '手机号',
    rules: [],
    placeholder: '请输入手机号',
    field: 'cellphone',
  },
  {
    type: 'select',
    label: '可用',
    rules: [],
    placeholder: '请输入状态',
    options: [
      { label: '启用', value: 1 },
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
    field: 'createAt',
  },
]
// 整合为一个配置对象
const modalConfig: IForm = {
  formItems,
  labelWidth,
  itemStyle,
  colLayout,
}

export { modalConfig }
