import type { IFormItem, IForm } from '@/base-ui/form/index'

const labelWidth = '80px'
const itemStyle = {
  padding: '10px 40px',
}
const colLayout = {
  span: 24,
}
const formItems: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名',
    field: 'name',
  },
  {
    type: 'input',
    label: '角色介绍',
    rules: [],
    placeholder: '请输入真实姓名',
    field: 'realname',
  },
  {
    type: 'select',
    label: '角色',
    rules: [],
    placeholder: '请选择角色',
    field: 'roleId',
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
