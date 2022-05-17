<template>
  <div class="goods">
    <div class="header">
      <page-search :searchFormConfig="formConfig" @queryForm="handleQuery" />
    </div>
    <div class="content">
      <page-content
        :tableConfig="tableConfig"
        pageName="goods"
        ref="pageContent"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import formConfig from './config/search-config'
import { tableConfig } from './config/content-config'

export default defineComponent({
  name: 'goods',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    return {
      formConfig,
      tableConfig,
    }
  },
})
</script>

<style scoped></style>
