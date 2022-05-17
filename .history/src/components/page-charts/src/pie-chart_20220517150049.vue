<template>
  <div class="pie-chart">
    <mc-echart :option="option"></mc-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { default as McEchart, EChartsOption } from '@/base-ui/echart'
import type { IPieData } from '../types'

const props = defineProps<{
  pieData: IPieData[]
}>()

const option = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
</script>

<style scoped lang="less"></style>
