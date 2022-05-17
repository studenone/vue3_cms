<template>
  <div class="goods">
    <h2>goods</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'

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
