<template>
  <div class="mc-table">
    <el-table :data="tableData" border style="width: 100%">
      <template v-for="column in columnConfig" :key="column.prop">
        <el-table-column v-bind="column" align="center">
          <template #default="{ row, $index }"
            >{{ $index + row[column.prop] }}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  },
})
</script>

<style scoped lang="less"></style>
