<template>
  <div class="mc-card">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
})
</script>

<style scoped lang="less">
.mc-card {
  :deep(.el-card__header) {
    padding: 10px 20px;
  }
}
</style>
