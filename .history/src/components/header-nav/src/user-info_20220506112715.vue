<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link"> Dropdown List </span>
      <el-icon><avatar /></el-icon>
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
import { defineComponent } from 'vue'
import { Avatar } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Avatar,
  },
})
</script>

<style scoped lang="less"></style>
