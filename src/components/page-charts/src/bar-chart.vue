<template>
  <div class="line-chart">
    <mc-echart :option="option"></mc-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import * as echarts from 'echarts'
import { default as McEchart } from '@/base-ui/echart'
import type { IPieData } from '../types'

const props = defineProps<{
  barData: IPieData[]
}>()

const option = computed(() => {
  return {
    // title: {
    //   text: '特性示例：渐变色 阴影 点击缩放',
    //   subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
    // },
    xAxis: {
      data: props.barData.map((item) => {
        return item.name
      }),
      axisLabel: {
        inside: true,
        color: '#fff',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#999',
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
        data: props.barData.map((item) => {
          return item.value
        }),
      },
    ],
  }
})
</script>

<style scoped lang="less"></style>
