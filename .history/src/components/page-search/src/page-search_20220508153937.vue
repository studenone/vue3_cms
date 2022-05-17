<template>
  <div>
    <mc-form v-bind="formConfig" v-model="formData">
      <template #header>
        <div class="title">标题</div>
      </template>
      <template #footer>
        <div class="search-btn">
          <el-button>
            <el-icon><Refresh /></el-icon>
            重置</el-button
          >
          <el-button type="primary">
            <el-icon><Search /></el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </mc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="less"></style>
