<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchFormConfig="formConfig"
        @queryForm="handleQuery"
        @resetForm="handleReset"
      ></page-search>
    </div>
    <div class="search-content">
      <page-content
        :tableConfig="tableConfig"
        pageName="users"
        ref="pageContent"
        @create-change="handleCreate"
        @edit-change="handleEdit"
      >
        <template #create-name> 新建用户 </template>
      </page-content>
    </div>
    <div class="modal">
      <page-modal :modalConfig="modalConfig" ref="pageModal" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import formConfig from './config/search-config' // 将配置文件抽离
import { tableConfig } from './config/content-config' //配置表格
import { modalConfig } from './config/modal-config' //配置表格
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import PageModal from '@/components/page-modal/index'
// import { useStore } from '@/store/index'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    // 使用ts配置化生成组件
    // 需要获取到表单字段以用来查询
    // 公用的组件只传入配置文件即可使用
    // 视图层发送网络请求，仍有冗余代码，可以聚合在通用组件内部
    // const store = useStore() // 获取action
    // store.dispatch('system/getPageListAction', {
    //   pageUrl: '/users/list',
    //   queryInfo: {
    //     offset: 0,
    //     size: 10,
    //   },
    // })

    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    // // 在业务组件里调用网络请求
    // const pageContent = ref<InstanceType<typeof PageContent>>() //要暴露在渲染上下文中
    // const handleQuery = (value: any) => {
    //   console.log('[handle]', value, pageContent.value)
    //   pageContent.value?.getPageData(value)
    // }

    // 封装hooks，提升通用性
    const [pageContent, handleQuery, handleReset] = usePageSearch()
    // 处理增删改查间的组件联动
    // 在业务组件里传递特殊的回调逻辑
    const createCb = () => {
      const password = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      password!.isHidden = false
    }
    const editCb = () => {
      const password = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      password!.isHidden = true
    }
    const [pageModal, handleCreate, handleEdit] = usePageModal(createCb, editCb)
    return {
      formConfig,
      tableConfig,
      modalConfig,
      pageContent,
      pageModal,
      handleQuery,
      handleReset,
      handleCreate,
      handleEdit,
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
  }
}
</style>
