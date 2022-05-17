<template>
  <div class="page-content">
    <mc-table
      :tableData="tableData"
      v-bind="tableConfig"
      @selection-change="handlerSelection"
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
import { defineComponent, computed } from 'vue'
import McTable from '@/base-ui/table/index'
import { EditPen, Delete } from '@element-plus/icons-vue'
import { useStore } from '@/store/index'

export default defineComponent({
  props: {
    tableConfig: {
      type: Object,
    },
    tableData: {
      type: Array,
      required: true,
    },
  },
  components: {
    McTable,
    EditPen,
    Delete,
  },
  emits: ['selection-change'],
  setup(props, { emit }) {
    const handlerSelection = (value: any) => {
      emit('selection-change', value)
    }
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10,
      },
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    return {
      handlerSelection,
      userList,
      userCount,
    }
  },
})
</script>

<style scoped lang="less">
.page-content {
  .operator {
    display: flex;
  }
}
</style>
