<template>
  <div class="user">
    <el-form :inline="true" :label-position="right" label-width="100px">
      <el-row>
        <el-col>
          <el-form-item label="id"><el-input></el-input></el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="用户"><el-input></el-input></el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="密码"><el-input></el-input></el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="部门"><el-input></el-input></el-form-item>
        </el-col>
      </el-row>
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
