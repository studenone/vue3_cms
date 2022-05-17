<template>
  <div class="rose-chart">
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
    legend: {
      top: 'bottom',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [50, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: props.pieData,
      },
    ],
  }
})
</script>

<style scoped lang="less"></style>
