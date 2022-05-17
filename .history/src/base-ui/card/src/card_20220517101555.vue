<template>
  <div class="mc-card">
    <el-card>
      <template #header>
        <slot name="title"></slot>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="less"></style>
