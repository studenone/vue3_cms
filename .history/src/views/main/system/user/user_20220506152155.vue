<template>
  <div class="user">
    <el-form :inline="true">
      <el-form-item label="id"></el-form-item>
      <el-form-item label="用户"></el-form-item>
      <el-form-item label="密码"></el-form-item>
      <el-form-item label="部门"></el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
