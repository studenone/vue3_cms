<template>
  <div>
    <el-table :data="userList" border style="width: 100%">
      <template v-for="column in userListConfig" :key="column.prop">
        <el-table-column v-bind="column" align="center"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="less"></style>
