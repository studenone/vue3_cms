<template>
  <div class="mc-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handlerSelectChange"
    >
      <el-table-column
        v-if="isSelectColumn"
        type="selection"
        width="60"
      ></el-table-column>
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
    <div class="footer">
      <slot name="footer"></slot>
    </div>
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
    isSelectColumn: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  emits: ['selection-change'],
  setup(props, { emit }) {
    const handlerSelectChange = (value: any) => {
      emit('selection-change', value)
    }
    return {
      handlerSelectChange,
    }
  },
})
</script>

<style scoped lang="less">
.mc-table {
  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
