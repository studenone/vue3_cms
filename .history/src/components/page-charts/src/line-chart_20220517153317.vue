<template>
  <div class="line-chart">
    <mc-echart :option="option"></mc-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { default as McEchart } from '@/base-ui/echart'
import type { IPieData } from '../types'

const props = defineProps<{
  pieData: IPieData[]
}>()

const option = computed(() => {
  return {
    title: {
      text: 'Stacked Area Chart',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {},
    toolbox: {
      feature: {
        // saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
    ],
  }
})
</script>

<style scoped lang="less"></style>
