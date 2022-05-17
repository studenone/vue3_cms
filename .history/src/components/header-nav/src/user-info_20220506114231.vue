<template>
  <div class="user-info">
    <el-dropdown>
      <el-icon :size="20"><avatar /></el-icon>
      <span class="el-dropdown-link">{{ user }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Avatar } from '@element-plus/icons-vue'
import { useStore } from '@/store/index'

export default defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const store = useStore()
    const user = computed(() => store.state.login.userInfo.name)
    return {
      user,
    }
  },
})
</script>

<style scoped lang="less">
.user-info {
  .el-dropdown-link {
    display: inline-block;
    vertical-align: text-top;
  }
}
</style>
