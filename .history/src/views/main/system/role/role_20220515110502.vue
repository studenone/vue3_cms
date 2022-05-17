<template>
  <div class="role">
    <page-search :searchFormConfig="formConfig"></page-search>
    <page-content :tableConfig="tableConfig" pageName="role"></page-content>
    <page-modal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import { tableConfig } from './config/content-config'
import formConfig from './config/search-config'
import { modalConfig } from './config/modal-config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    return {
      tableConfig,
      formConfig,
      modalConfig,
    }
  },
})
</script>

<style scoped></style>
