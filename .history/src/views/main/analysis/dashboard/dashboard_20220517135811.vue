<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7"><mc-card title="分类商品数量(饼图)"></mc-card></el-col>
      <el-col :span="10"><mc-card title="不同城市销量"></mc-card></el-col>
      <el-col :span="7"
        ><mc-card title="分类商品数量(玫瑰图)"></mc-card
      ></el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <mc-card title="分类商品销量"></mc-card>
      </el-col>
      <el-col :span="12">
        <mc-card title="分类商品收藏">
          <mc-echart :option="option"></mc-echart>
        </mc-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import McCard from '@/base-ui/card'
import McEchart from '@/base-ui/echart'

export default defineComponent({
  name: 'dashboard',
  components: {
    McCard,
    McEchart,
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')
    const option = {
      title: {
        text: '测试',
        left: '20%',
      },
      tooltip: {
        show: true,
        axisPointer: {
          type: 'line',
          axis: 'auto',
        },
      },
      legend: {
        show: true,
        data: [
          {
            name: 'line',
            icon: 'circle',
          },
        ],
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'bar',
          name: 'line',
        },
      ],
    }
    return { option }
  },
})
</script>

<style scoped lang="less">
.dashboard {
  .content-row {
    margin-top: 20px;
  }
}
</style>
