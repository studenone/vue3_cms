<template>
  <div class="header-nav">
    <span @click="changeExpand" class="fold-icon">
      <el-icon v-if="isExpand" :size="30"><expand /></el-icon>
      <el-icon v-else :size="30"><fold /></el-icon>
    </span>
    <div class="header-content">
      <div>面包</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import BreadCrumb from './bread-crumb.vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Expand,
    Fold,
    UserInfo,
    BreadCrumb,
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
  display: flex;
  width: 100%;
  .fold-icon {
    cursor: pointer;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
