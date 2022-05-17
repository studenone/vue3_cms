<template>
  <div class="menu">
    <h2>menu</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/index'

export default defineComponent({
  name: 'mc-menu',
  components: {
    pageContent,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
