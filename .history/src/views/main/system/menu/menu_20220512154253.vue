<template>
  <div class="menu">
    <page-content :tableConfig="tableConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/index'
import { tableConfig } from './config/content-config'

export default defineComponent({
  name: 'mc-menu',
  components: {
    pageContent,
  },
  setup() {
    return { tableConfig }
  },
})
</script>

<style scoped></style>
