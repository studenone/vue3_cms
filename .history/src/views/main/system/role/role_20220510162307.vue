<template>
  <div class="role">
    <page-content :tableConfig="tableConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search'
import { tableConfig } from './config/content-config'
import { formConfig } from './config/search-config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
  },
  setup() {
    return {
      tableConfig,
      formConfig,
    }
  },
})
</script>

<style scoped></style>
