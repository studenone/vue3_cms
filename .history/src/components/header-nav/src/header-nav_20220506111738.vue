<template>
  <div class="header-nav">
    <span @click="changeExpand" class="fold-icon">
      <el-icon v-if="isExpand" :size="30"><expand /></el-icon>
      <el-icon v-else :size="30"><fold /></el-icon>
    </span>
    <div class="header-content">
      <div>面包</div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link"> Dropdown List </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
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
