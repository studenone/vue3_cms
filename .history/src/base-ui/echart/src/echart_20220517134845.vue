<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps } from 'vue'
import * as echarts from 'echarts'

// 定义props
const props = defineProps<{
  width: string
  height: string
}>()

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
