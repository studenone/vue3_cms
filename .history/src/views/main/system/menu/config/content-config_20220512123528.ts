import type { ITableColumn, ITable } from '@/base-ui/table/index'

const showIndexColumn = false
const isSelectColumn = false
const title = '菜单列表'
const columnConfig: ITableColumn[] = [
  {
    label: 'name',
    prop: 'name',
    minWidth: '140',
    slotName: 'name',
  },
  {
    label: 'type',
    prop: 'type',
    minWidth: '140',
    slotName: 'type',
  },
  {
    label: 'url',
    prop: 'url',
    minWidth: '140',
    slotName: 'url',
  },
  {
    label: 'icon',
    prop: 'icon',
    minWidth: '140',
    slotName: 'icon',
  },
  {
    label: 'permission',
    prop: 'permission',
    minWidth: '140',
    slotName: 'permission',
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

const childrenProps = {
  rowKey: 'id',
  treeProp: {
    children: 'children',
  },
}

export const tableConfig: ITable = {
  showIndexColumn,
  isSelectColumn,
  title,
  columnConfig,
  childrenProps,
}
