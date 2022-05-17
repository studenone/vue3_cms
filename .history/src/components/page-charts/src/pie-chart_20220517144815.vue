<template>
  <div class="pie-chart">
    <mc-echart :option="option" height="300px"></mc-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { default as McEchart, EChartsOption } from '@/base-ui/echart'

export default defineComponent({
  components: {
    McEchart,
  },
  props: {
    option: {
      type: Object as PropType<EChartsOption>,
    },
  },
})
</script>

<style scoped lang="less"></style>
