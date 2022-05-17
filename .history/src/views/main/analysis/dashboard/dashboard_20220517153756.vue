<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <mc-card title="分类商品数量(饼图)">
          <pie-chart :pieData="categoryGoodsCount"></pie-chart>
        </mc-card>
      </el-col>
      <el-col :span="10">
        <mc-card title="不同城市销量"></mc-card>
      </el-col>
      <el-col :span="7">
        <mc-card title="分类商品数量(玫瑰图)">
          <rose-chart :pieData="categoryGoodsCount"></rose-chart>
        </mc-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <mc-card title="分类商品销量">
          <line-chart :lineData="categoryGoodsSale"></line-chart>
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
import { PieChart, RoseChart, LineChart } from '@/components/page-charts'

export default defineComponent({
  name: 'dashboard',
  components: {
    McCard,
    PieChart,
    RoseChart,
    LineChart,
  },
  setup() {
    // 1、发起数据请求
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')
    // 2、获取各图形数据
    const categoryGoodsCount = computed(() =>
      store.state.analysis.categoryGoodsCount.map((item) => {
        return {
          name: item.name,
          value: item.goodsCount,
        }
      })
    )
    const categoryGoodsSale = computed(() =>
      store.state.analysis.categoryGoodsSale.map((item) => {
        return {
          name: item.name,
          value: item.goodsCount,
        }
      })
    )
    return { categoryGoodsCount, categoryGoodsSale }
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
