<template>
  <div class="user">
    <el-form :label-position="right" label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="id"><el-input></el-input></el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户"><el-input></el-input></el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="密码"><el-input></el-input></el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门"><el-input></el-input></el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import McForm from '@/base-ui/form/index'

export default defineComponent({
  name: 'user',
  components: {
    McForm,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
