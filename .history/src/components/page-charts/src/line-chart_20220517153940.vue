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
  lineData: IPieData[]
}>()

const option = computed(() => {
  return {
    // title: {
    //   text: 'Stacked Area Chart',
    // },
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
        data: props.lineData.map((item) => {
          return item.name
        }),
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
        data: props.lineData.map((item) => {
          return item.value
        }),
      },
    ],
  }
})
</script>

<style scoped lang="less"></style>
