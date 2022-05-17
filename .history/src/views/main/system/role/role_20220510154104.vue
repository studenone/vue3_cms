<template>
  <div class="role">
    <page-content :tableConfig="contentConfig" :pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import contentConfig from './config/content-config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
  },
  setup() {
    return {
      contentConfig,
    }
  },
})
</script>

<style scoped></style>
