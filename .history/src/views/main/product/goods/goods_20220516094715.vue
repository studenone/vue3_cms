<template>
  <div class="goods">
    <div class="header">
      <page-search :searchFormConfig="formConfig" @queryForm="handleQuery" />
    </div>
    <div class="content">
      <page-content
        :tableConfig="tableConfig"
        pageName="goods"
        :searchInfo="searchInfo"
        ref="pageContent"
      >
        <!-- 作用域插槽两层传递，在view页面定制插槽 -->
        <template #imgUrl="scope">
          <el-image
            style="width: 60px; height: 60px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
          >
          </el-image>
        </template>
        <template #oldPrice="scope"> &yen;{{ scope.row.oldPrice }} </template>
      </page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import formConfig from './config/search-config'
import { tableConfig } from './config/content-config'
import { usePageSearch } from '@/hooks/use-page-search' //注入搜索逻辑

export default defineComponent({
  name: 'goods',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const [pageContent, handleQuery, searchInfo] = usePageSearch()

    return {
      formConfig,
      tableConfig,
      pageContent,
      handleQuery,
      searchInfo,
    }
  },
})
</script>

<style scoped></style>
