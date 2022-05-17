<template>
  <div class="page-search">
    <mc-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <div class="title">标题</div>
      </template>
      <template #footer>
        <div class="search-btn">
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置</el-button
          >
          <el-button type="primary" @click="handleSearch">
            <el-icon><Search /></el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </mc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import McForm from '@/base-ui/form/index'
import { Search, Refresh } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    McForm,
    Search,
    Refresh,
  },
  setup(props) {
    // 取出配置里的字段filed配置搜索框字段
    const formItems = props.searchFormConfig?.formItems ?? []
    const fieldConfig: any = {}
    for (const iterator of formItems) {
      fieldConfig[iterator.field] = ''
    }
    const formData = reactive(fieldConfig)
    // 处理search组件中发生的事件
    const handleReset = () => {
      formData.id = '12'
    }
    const handleSearch = () => {
      console.log(fieldConfig)
    }
    return {
      formData,
      handleReset,
      handleSearch,
    }
  },
})
</script>

<style scoped lang="less">
.page-search {
  .search-btn {
    padding: 0 50px 20px 0;
    text-align: right;
    :deep(.el-icon) {
      padding-right: 5px;
    }
  }
  .title {
    color: red;
  }
}
</style>
