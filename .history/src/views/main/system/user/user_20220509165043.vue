<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="formConfig"></page-search>
    </div>
    <div class="search-content">
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
          <el-button>新建用户</el-button>
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import formConfig from './config/search-config' // 将配置文件抽离
import PageSearch from '@/components/page-search/index'
import { useStore } from '@/store/index'
import McTable from '@/base-ui/table/index'
import { EditPen, Delete } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    McTable,
    EditPen,
    Delete,
  },
  setup() {
    // 使用ts配置化生成组件
    // 需要获取到表单字段以用来查询
    // 公用的组件只传入配置文件即可使用
    const store = useStore() // 获取action
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10,
      },
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const showIndex = true
    const isSelectColumn = true
    const title = '用户列表'
    const userListConfig = [
      {
        label: 'name',
        prop: 'name',
        minWidth: '140',
        slotName: 'name',
      },
      {
        label: 'cellphone',
        prop: 'cellphone',
        minWidth: '140',
        slotName: 'cellphone',
      },
      {
        label: 'realname',
        prop: 'realname',
        minWidth: '140',
        slotName: 'realname',
      },
      {
        label: 'enable',
        prop: 'enable',
        minWidth: '140',
        slotName: 'enable',
      },
      {
        label: 'createAt',
        prop: 'createAt',
        minWidth: '140',
        slotName: 'createAt',
      },
      {
        label: 'updateAt',
        prop: 'updateAt',
        minWidth: '140',
        slotName: 'updateAt',
      },
      {
        label: '操作',
        minWidth: '80',
        slotName: 'operation',
      },
    ]
    const handlerSelection = (payload: any) => {
      console.log(payload)
    }

    return {
      formConfig,
      userList,
      userCount,
      userListConfig,
      showIndex,
      isSelectColumn,
      handlerSelection,
      title,
    }
  },
})
</script>

<style scoped lang="less">
.user {
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
  .search-content {
    padding: 20px;
    border-top: solid 20px #f5f5f5;
    .operator {
      display: flex;
    }
  }
}
</style>
