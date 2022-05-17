<template>
  <div class="role">
    <page-content></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
