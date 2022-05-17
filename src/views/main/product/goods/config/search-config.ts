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
    label: '商品名',
    rules: [],
    placeholder: '请输入商品名',
    field: 'name',
  },
  {
    type: 'input',
    label: '产地',
    rules: [],
    placeholder: '请输入产地',
    field: 'address',
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
const formConfig: IForm = {
  formItems,
  labelWidth,
  itemStyle,
  colLayout,
}

export default formConfig
