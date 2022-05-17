<template>
  <div class="page-modal">
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <mc-form />
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
import { defineComponent, ref } from 'vue'
import McForm from '@/base-ui/form/index'

export default defineComponent({
  components: {
    McForm,
  },
  props: {
    modalConfig: {
      type: Object,
    },
  },
  setup() {
    const centerDialogVisible = ref(true)
    return {
      centerDialogVisible,
    }
  },
})
</script>

<style scoped lang="less"></style>
