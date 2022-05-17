<template>
  <div class="pie-chart">
    <mc-echart></mc-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import McEchart from '@/base-ui/echart'

export default defineComponent({
  components: {
    McEchart,
  },
  setup() {
    const option = {}
    return {
      option,
    }
  },
})
</script>

<style scoped lang="less"></style>
