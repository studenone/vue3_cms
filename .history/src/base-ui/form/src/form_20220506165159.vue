<template>
  <div class="mc-form">
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
import { defineComponent, PropType } from 'vue'
import type { IFormItem } from '../types/index'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => {},
    },
  },
})
</script>

<style scoped lang="less"></style>
