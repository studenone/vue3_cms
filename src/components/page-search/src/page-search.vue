<template>
  <div class="page-search">
    <mc-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <div class="title">高级检索</div>
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
import { defineComponent, ref } from 'vue'
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
  emits: ['resetForm', 'queryForm'],
  setup(props, { emit }) {
    // 取出配置里的字段filed配置搜索框字段
    const formItems = props.searchFormConfig?.formItems ?? []
    const fieldConfig: any = {}
    for (const iterator of formItems) {
      fieldConfig[iterator.field] = ''
    }
    const formData = ref(fieldConfig)
    // 处理search组件中发生的事件
    // 1、点击重置按钮
    const handleReset = () => {
      for (const key in fieldConfig) {
        formData.value[`${key}`] = ''
      }
      emit('resetForm')
    }
    // 2、点击搜索按钮
    const handleSearch = () => {
      // 将查询条件发送出去
      emit('queryForm', formData.value)
    }
    const theme = {
      color: 'red',
    }
    return {
      formData,
      handleReset,
      handleSearch,
      theme,
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
    // 动态样式
    color: v-bind('theme.color');
  }
}
</style>
