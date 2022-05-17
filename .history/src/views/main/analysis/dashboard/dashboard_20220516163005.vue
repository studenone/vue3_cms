<template>
  <div class="dashboard">
    <div class="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const chart = ref()
    // 初始化实例
    echarts.init(chart.value)
    // 图标配置
    const option = {
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
    // 显示图表
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
