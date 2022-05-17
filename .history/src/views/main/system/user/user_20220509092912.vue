<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="formConfig"></page-search>
    </div>
    <div class="search-content">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column prop="name" label="Date" />
        <el-table-column prop="cellphone" label="Name" />
        <el-table-column prop="realname" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import formConfig from './config/search-config' // 将配置文件抽离
import PageSearch from '@/components/page-search/index'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
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
        size: 5,
      },
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    return {
      formConfig,
      userList,
      userCount,
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
    padding-top: 24px;
  }
}
</style>
