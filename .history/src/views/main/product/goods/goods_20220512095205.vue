<template>
  <div class="goods">
    <div class="header">
      <page-search />
    </div>
    <div class="content">
      <page-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import formConfig from './config/search-config'
import { tableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
