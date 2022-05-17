import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

export function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)
}
