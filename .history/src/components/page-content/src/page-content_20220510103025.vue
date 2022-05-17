<template>
  <div>
    <mc-table
      :tableData="userList"
      :columnConfig="userListConfig"
      :showIndexColumn="showIndex"
      :isSelectColumn="isSelectColumn"
      @selection-change="handlerSelection"
      :title="title"
    >
      <!-- 表格头部具名插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <!-- 数据项的具名插槽 -->
      <template #enable="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #operation>
        <div class="operator">
          <el-button size="small" type="text">
            <el-icon><EditPen /></el-icon>
            增加</el-button
          >
          <el-button size="small" type="text">
            <el-icon><Delete /></el-icon>
            删除</el-button
          >
        </div>
      </template>
    </mc-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import McTable from '@/base-ui/table/index'
import { EditPen, Delete } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    McTable,
    EditPen,
    Delete,
  },
  emits: ['selection-change'],
  setup(props, { emit }) {
    const handlerSelection = (value) => {
      emit('selection-change', value)
    }
    return {
      handlerSelection,
    }
  },
})
</script>

<style scoped lang="less"></style>
