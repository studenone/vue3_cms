<template>
  <div class="mc-form">
    <el-form :label-position="right" label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <el-input :placeholder="item.placeholder"></el-input>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { IFormItem } from '../types/index'
// 封装组件，高阶配置

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default() {
        return []
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
