<template>
  <div class="header-nav">
    <el-icon><expand /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Expand } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Expand,
  },
})
</script>

<style scoped lang="less"></style>
