<template>
  <div class="mc-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="column in columnConfig" :key="column.prop">
        <el-table-column v-bind="column" align="center">
          <template #default="{ row }">
            <slot :name="column.slotName" :row="row">{{
              row[column.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 使用作用域插槽

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    columnConfig: {
      type: Array,
      required: true,
    },
    showIndexColumn: {
      type: Boolean,
      default: false,
    },
    showIndexColumn: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped lang="less"></style>
