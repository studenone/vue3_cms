<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <mc-card title="分类商品数量(饼图)">
          <pie-chart :option="option2"></pie-chart>
        </mc-card>
      </el-col>
      <el-col :span="10">
        <mc-card title="不同城市销量"></mc-card>
      </el-col>
      <el-col :span="7">
        <mc-card title="分类商品数量(玫瑰图)"> </mc-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <mc-card title="分类商品销量">
          <pie-chart :option="option2"></pie-chart>
        </mc-card>
      </el-col>
      <el-col :span="12">
        <mc-card title="分类商品收藏"> </mc-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import McCard from '@/base-ui/card'
import { PieChart } from '@/components/page-charts'

export default defineComponent({
  name: 'dashboard',
  components: {
    McCard,
    PieChart,
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')
    const categoryGoodsCount = computed(
      () => store.state.analysis.categoryGoodsCount
    )
    return { categoryGoodsCount }
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
