<template>
  <div class="role">
    <page-content :tableConfig="tableConfig" :pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import { tableConfig } from './config/content-config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
  },
  setup() {
    return {
      tableConfig,
    }
  },
})
</script>

<style scoped></style>
