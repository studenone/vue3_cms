<template>
  <div
    class="chart"
    ref="chart"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, withDefaults, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import { useEchart } from '../hooks/use-echart'

// 纯ts定义props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '350px',
  }
)

const chart = ref<HTMLElement | null>()
onMounted(() => {
  // 剥离echart逻辑
  const { setOptions } = useEchart(chart.value!)
  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>

<style scoped lang="less"></style>
