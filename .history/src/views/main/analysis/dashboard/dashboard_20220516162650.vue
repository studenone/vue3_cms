<template>
  <div class="dashboard">
    <div class="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    return {}
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
