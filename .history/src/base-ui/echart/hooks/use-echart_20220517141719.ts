import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

export function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }
  return {
    echartInstance,
    setOptions,
  }
}
