<template>
  <div class="chart"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  setup() {
    onMounted(() => {
      const echartInstance = echarts.init()
    })
  },
})
</script>

<style scoped lang="less"></style>
