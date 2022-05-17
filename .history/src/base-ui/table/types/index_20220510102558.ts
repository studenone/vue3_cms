export interface ITableColumn {
  label: string
  prop?: string
  minWidth: string
  slotName: string
}

export interface ITable {
  showIndexColumn: boolean
  isSelectColumn: boolean
  title: string
  columnConfig: ITableColumn[]
}
