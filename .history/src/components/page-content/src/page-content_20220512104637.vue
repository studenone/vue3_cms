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
      <template #imgUrl="scope">
        <el-image
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        >
        </el-image>
      </template>
    </mc-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import McTable from '@/base-ui/table/index'
import { EditPen, Delete } from '@element-plus/icons-vue'
import { useStore } from '@/store/index'
import { usePageContent } from '@/hooks/use-page-content' //封装访问vuex的逻辑

// 在业务组件内部发送网络请求

export default defineComponent({
  props: {
    tableConfig: {
      type: Object,
    },
    pageName: {
      type: String,
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
    // 1、处理分页组件导致的请求参数变化
    const pageInfo = ref({
      pageSize: 10,
      currentPage: 1,
    })
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
    // 2、发送网络请求需要封装成函数,使用了闭包不算好的实现
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          ...queryInfo,
          offset:
            pageInfo.value.pageSize * (pageInfo.value.currentPage - 1)
              ? pageInfo.value.pageSize * (pageInfo.value.currentPage - 1)
              : 0,
          size: pageInfo.value.pageSize ?? 10,
        },
      })
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
    return {
      handlerSelection,
      userList,
      userCount,
      pageInfo,
      getPageData,
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
