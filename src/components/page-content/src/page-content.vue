<template>
  <div class="page-content">
    <mc-table
      :tableData="userList"
      v-bind="tableConfig"
      :listTotal="userCount"
      @selection-change="handlerSelection"
      v-model:page="pageInfo"
    >
      <!-- 表格头部具名插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" type="primary" @click="handleCreate">
          <slot name="create-name"></slot>
        </el-button>
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
      <template #operation="scope">
        <div class="operator">
          <el-button
            v-if="isUpdate"
            size="small"
            type="text"
            @click="handleEdit(scope.row)"
          >
            <el-icon><EditPen /></el-icon>
            编辑</el-button
          >
          <el-popconfirm
            confirm-button-text="Yes"
            cancel-button-text="No"
            title="Are you sure to delete this?"
            @confirm="confirmEvent(scope.row)"
          >
            <template #reference>
              <el-button v-if="isDelete" size="small" type="text">
                <el-icon><Delete /></el-icon>
                删除</el-button
              >
            </template>
          </el-popconfirm>
        </div>
      </template>
      <!-- <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template> -->
      <!-- 遍历生成动态插槽 -->
      <template
        v-for="item in dynamicSlots"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </mc-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import McTable from '@/base-ui/table/index'
import { EditPen, Delete } from '@element-plus/icons-vue'
import { useStore } from '@/store/index'
import { usePageContent } from '@/hooks/use-page-content' //封装访问vuex的逻辑
import { usePermissions } from '@/hooks/use-permissions' //封装访问vuex的逻辑
import type { ITable } from '@/base-ui/table/index'

// 在业务组件内部发送网络请求

export default defineComponent({
  props: {
    tableConfig: {
      type: Object as PropType<ITable>,
    },
    pageName: {
      type: String,
      default: '',
    },
    searchInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    McTable,
    EditPen,
    Delete,
  },
  emits: ['selection-change', 'edit-change', 'create-change'],
  setup(props, { emit }) {
    const handlerSelection = (value: any) => {
      emit('selection-change', value)
    }
    // 0、获取页面按钮操作权限
    const isCreate = usePermissions(props.pageName, 'create')
    const isDelete = usePermissions(props.pageName, 'delete')
    const isUpdate = usePermissions(props.pageName, 'update')
    const isQuery = usePermissions(props.pageName, 'query')

    const store = useStore()
    // 1、处理分页组件导致的请求参数变化
    const pageInfo = ref({
      pageSize: 10,
      currentPage: 1,
    })
    let isReset = false
    // 监听尺寸变化
    watch(
      () => pageInfo,
      () => {
        getPageData()
      },
      {
        deep: true,
      }
    )
    const resetPageInfo = () => {
      isReset = true
    }
    // 2、发送网络请求需要封装成函数,使用了闭包不算好的实现
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          ...queryInfo,
          ...props.searchInfo,
          offset:
            pageInfo.value.pageSize * (pageInfo.value.currentPage - 1) &&
            !isReset
              ? pageInfo.value.pageSize * (pageInfo.value.currentPage - 1)
              : 0,
          size: isReset ? pageInfo.value.pageSize : 10,
        },
      })
      isReset = false
    }
    getPageData()
    // 暴露给父组件属性
    // expose({
    //   getPageData,
    // })
    // 3、根据page name从vuex取出数据,这里也该封装成hooks
    // const userList = computed(() =>
    //   store.getters['system/pageListData'](props.pageName)
    // )
    // const userCount = computed(() =>
    //   store.getters['system/pageCountData'](props.pageName)
    // )
    const [userList, userCount] = usePageContent(props.pageName)
    // 4、生成部分属性的动态插槽
    const genericSlots = ['enable', 'createAt', 'updateAt', 'operation']
    const dynamicSlots = props.tableConfig?.columnConfig.filter(
      (item) => !genericSlots.includes(item.slotName)
    )
    // 5、编辑与删除功能
    const confirmEvent = (payload: any) => {
      handleDelete(payload)
    }
    const handleDelete = (item: any) => {
      console.log('[delete]', item)
      store.dispatch('system/deletePageListAction', {
        pageName: props.pageName,
        id: item.id,
      })
    }
    const handleCreate = () => {
      emit('create-change')
    }
    const handleEdit = (row: any) => {
      emit('edit-change', row)
    }
    return {
      handlerSelection,
      userList,
      userCount,
      pageInfo,
      dynamicSlots,
      isCreate,
      isDelete,
      isUpdate,
      isQuery,
      getPageData,
      resetPageInfo,
      handleDelete,
      confirmEvent,
      handleCreate,
      handleEdit,
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
