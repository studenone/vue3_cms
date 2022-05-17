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
  setup() {
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
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
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
    return {
      option,
    }
  },
})
</script>

<style scoped lang="less"></style>
