<template>
  <div>
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <span
        >It should be noted that the content will not be aligned in center by
        default</span
      >
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="less"></style>
