<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchFormConfig="formConfig"
        @queryForm="handleQuery"
      ></page-search>
    </div>
    <div class="search-content">
      <page-content :tableConfig="tableConfig" pageName="users" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import formConfig from './config/search-config' // 将配置文件抽离
import { tableConfig } from './config/content-config' //配置表格
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
// import { useStore } from '@/store/index'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
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

    const handleQuery = () => {}

    return {
      formConfig,
      tableConfig,
      handleQuery,
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
