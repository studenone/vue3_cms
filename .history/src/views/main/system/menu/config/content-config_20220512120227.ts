import type { ITableColumn, ITable } from '@/base-ui/table/index'

const showIndexColumn = true
const isSelectColumn = true
const title = '菜单列表'
const columnConfig: ITableColumn[] = [
  {
    label: 'name',
    prop: 'name',
    minWidth: '140',
    slotName: 'name',
  },
  {
    label: 'url',
    prop: 'url',
    minWidth: '140',
    slotName: 'url',
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
    minWidth: '100',
    slotName: 'operation',
  },
]

export const tableConfig: ITable = {
  showIndexColumn,
  isSelectColumn,
  title,
  columnConfig,
}
