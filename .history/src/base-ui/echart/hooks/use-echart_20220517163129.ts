import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

// 抽离echart的渲染逻辑
export function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  const resize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    resize,
  }
}
