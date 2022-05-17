<template>
  <div class="header-nav">
    <span>
      <el-icon><expand /></el-icon>
      <el-icon><fold /></el-icon>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Expand,
    Fold,
  },
})
</script>

<style scoped lang="less">
.header-nav {
}
</style>
