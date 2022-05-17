<template>
  <div class="dashboard">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const chart = ref<HTMLElement>()
    nextTick(() => {
      // 1、初始化实例
      const myChart = echarts.init(chart.value!, 'light', {
        renderer: 'svg',
      })
      // 2、图标配置
      const option = {
        title: {
          text: '测试',
          left: '20%',
        },
        tooltip: {
          show: true,
          axisPointer: {
            type: 'shallow',
          },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      }
      // 3、显示图表
      myChart.setOption(option)
    })
    return { chart }
  },
})
</script>

<style scoped lang="less">
.dashboard {
  .chart {
    width: 400px;
    height: 400px;
  }
}
</style>
