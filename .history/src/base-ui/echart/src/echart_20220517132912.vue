<template>
  <div class="chart" ref="chart"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  setup() {
    onMounted(() => {
      const chart = ref<HTMLElement | null>()
      const echartInstance = echarts.init(chart.value!)
    })
  },
})
</script>

<style scoped lang="less"></style>
