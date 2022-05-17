<template>
  <div
    class="chart"
    ref="chart"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

// 纯ts定义props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '200px',
  }
)

const chart = ref<HTMLElement | null>()
onMounted(() => {
  // 1、获取实例
  const echartInstance = echarts.init(chart.value!)
  // 2、图标配置
  const option = {
    title: {
      text: '测试',
      left: '20%',
    },
    tooltip: {
      show: true,
      axisPointer: {
        type: 'line',
        axis: 'auto',
      },
    },
    legend: {
      show: true,
      data: [
        {
          name: 'line',
          icon: 'circle',
        },
      ],
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
        type: 'bar',
        name: 'line',
      },
    ],
  }
  // 3、显示图表
  echartInstance.setOption(option)
})
</script>

<style scoped lang="less"></style>
