<template>
  <div class="dashboard">
    <div class="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const chart = ref()
    echarts.init(chart.value)
    const option = {}
    return { chart }
  },
})
</script>

<style scoped lang="less">
.dashboard {
  .chart {
    width: 400px;
    height: 400px;
  }
}
</style>
