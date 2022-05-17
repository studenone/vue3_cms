<template>
  <div>
    <mc-breadcrumb />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import McBreadcrumb from '@/base-ui/breadcrumb/index'

export default defineComponent({
  components: {
    McBreadcrumb,
  },
})
</script>

<style scoped lang="less"></style>
