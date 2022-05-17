<template>
  <div class="page-search">
    <mc-form v-bind="searchFormConfig" v-model="formData">
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
    </mc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import McForm from '@/base-ui/form/index'
import { Search, Refresh } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    McForm,
    Search,
    Refresh,
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      hobby: '',
      time: '',
    })
    return {
      formData,
    }
  },
})
</script>

<style scoped lang="less">
.page-search {
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
