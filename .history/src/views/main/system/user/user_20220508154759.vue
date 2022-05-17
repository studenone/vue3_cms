<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="formConfig"></page-search>
    </div>
    <div class="search-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import formConfig from './config/search-config' // 将配置文件抽离
import PageSearch from '@/components/page-search/index'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
  },
  setup() {
    // 使用ts配置化生成组件
    // 需要获取到表单字段以用来查询
    const formData = reactive({
      id: '',
      password: '',
      hobby: '',
      time: '',
    })
    return {
      formConfig,
      formData,
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
}
</style>
