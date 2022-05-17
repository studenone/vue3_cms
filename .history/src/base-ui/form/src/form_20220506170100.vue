<template>
  <div class="mc-form">
    <el-form :label-position="right" label-width="100px">
      <el-row> </el-row>
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
