import type { ITableColumn } from '@/base-ui/table/index'

const showIndexColumn = true
const isSelectColumn = true
const title = '用户列表'
const columnConfig: ITableColumn[] = [
  {
    label: 'name',
    prop: 'name',
    minWidth: '140',
    slotName: 'name',
  },
  {
    label: 'cellphone',
    prop: 'cellphone',
    minWidth: '140',
    slotName: 'cellphone',
  },
  {
    label: 'realname',
    prop: 'realname',
    minWidth: '140',
    slotName: 'realname',
  },
  {
    label: 'enable',
    prop: 'enable',
    minWidth: '140',
    slotName: 'enable',
  },
  {
    label: 'createAt',
    prop: 'createAt',
    minWidth: '140',
    slotName: 'createAt',
  },
  {
    label: 'updateAt',
    prop: 'updateAt',
    minWidth: '140',
    slotName: 'updateAt',
  },
  {
    label: '操作',
    minWidth: '80',
    slotName: 'operation',
  },
]

export const tableConfig = {
  showIndexColumn,
  isSelectColumn,
  title,
  columnConfig,
}
