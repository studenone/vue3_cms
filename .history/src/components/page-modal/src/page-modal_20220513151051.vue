<template>
  <div class="page-modal">
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
import { defineComponen, ref } from 'vue'

export default defineComponent({
  setup() {
    const centerDialogVisible = ref(true)
    return {
      centerDialogVisible,
    }
  },
})
</script>

<style scoped lang="less"></style>
