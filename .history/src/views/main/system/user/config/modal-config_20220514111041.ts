import type { IFormItem, IForm } from '@/base-ui/form/index'

const labelWidth = '80px'
const itemStyle = {
  padding: '10px 40px',
}
const colLayout = {
  span: 24,
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
    isHidden: false,
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
    label: '角色',
    rules: [],
    placeholder: '请选择角色',
    field: 'roleId',
  },
  {
    type: 'select',
    label: '部门',
    rules: [],
    placeholder: '请选择部门',
    field: 'departmentId',
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
