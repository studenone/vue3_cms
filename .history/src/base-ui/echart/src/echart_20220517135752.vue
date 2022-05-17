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
    option: EChartsOption
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
  // 3、显示图表
  echartInstance.setOption(props.option)
})
</script>

<style scoped lang="less"></style>
