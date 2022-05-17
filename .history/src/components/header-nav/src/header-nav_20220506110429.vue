<template>
  <div class="header-nav">
    <span @click="changeExpand" class="fold-icon">
      <el-icon v-if="isExpand" :size="30"><expand /></el-icon>
      <el-icon v-else :size="30"><fold /></el-icon>
    </span>
    <div class="header-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Expand,
    Fold,
  },
  setup(props, { emit }) {
    const isExpand = ref(false)
    const changeExpand = () => {
      isExpand.value = !isExpand.value
      emit('foldChange', isExpand.value) // 发送事件至main页面，控制样式变化
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
