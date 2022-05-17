<template>
  <div>
    <mc-breadcrumb :breadcrumbs="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import McBreadcrumb from '@/base-ui/breadcrumb/index'
import type { IBreadcrumb } from '@/base-ui/breadcrumb/types/index'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default() {
        return []
      },
    },
  },
  components: {
    McBreadcrumb,
  },
})
</script>

<style scoped lang="less"></style>
