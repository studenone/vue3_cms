<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item v-if="item.path" :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { IBreadcrumb } from '../types/index'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default() {
        return []
      },
    },
  },
})
</script>

<style scoped lang="less"></style>
