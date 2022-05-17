<template>
  <div class="user">
    <div class="search">
      <!-- <mc-form v-bind="formConfig" v-model="formData">
        <template #header>
          <div class="title">标题</div>
        </template>
        <template #footer>
          <div class="search-btn">
            <el-button>
              <el-icon><Refresh /></el-icon>
              重置</el-button
            >
            <el-button type="primary">
              <el-icon><Search /></el-icon>
              搜索</el-button
            >
          </div>
        </template>
      </mc-form> -->
      <page-search :searchFormConfig="formConfig"></page-search>
    </div>
    <div class="search-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import McForm from '@/base-ui/form/index'
import formConfig from './config/search-config' // 将配置文件抽离
import { Search, Refresh } from '@element-plus/icons-vue'
import PageSearch from '@/components/page-search/index'

export default defineComponent({
  name: 'user',
  components: {
    // McForm,
    // Search,
    // Refresh,
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
