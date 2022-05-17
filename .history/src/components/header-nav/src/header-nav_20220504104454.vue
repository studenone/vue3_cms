<template>
  <div class="header-nav">
    <span @click="changeExpand" class="fold-icon">
      <el-icon v-if="isExpand"><expand /></el-icon>
      <el-icon v-else><fold /></el-icon>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Expand,
    Fold,
  },
  setup() {
    const isExpand = ref(false)
    const changeExpand = () => {
      isExpand.value = !isExpand.value
    }
    return {
      isExpand,
      changeExpand,
    }
  },
})
</script>

<style scoped lang="less">
.header-nav {
  .fold-icon {
    cursor: pointer;
  }
}
</style>
