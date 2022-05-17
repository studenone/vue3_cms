import type { ITableColumn, ITable } from '@/base-ui/table/index'

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
    label: 'oldPrice',
    prop: 'oldPrice',
    minWidth: '140',
    slotName: 'oldPrice',
  },
  {
    label: 'newPrice',
    prop: 'newPrice',
    minWidth: '140',
    slotName: 'newPrice',
  },
  {
    label: 'desc',
    prop: 'desc',
    minWidth: '140',
    slotName: 'desc',
  },
  {
    label: 'desc',
    prop: 'desc',
    minWidth: '140',
    slotName: 'desc',
  },
  {
    label: 'desc',
    prop: 'desc',
    minWidth: '140',
    slotName: 'desc',
  },
  {
    label: 'desc',
    prop: 'desc',
    minWidth: '140',
    slotName: 'desc',
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

export const tableConfig: ITable = {
  showIndexColumn,
  isSelectColumn,
  title,
  columnConfig,
}
