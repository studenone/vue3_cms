<template>
  <div class="page-modal">
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
      <mc-form v-bind="modalConfig" v-model="modalData" />
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
import { defineComponent, ref, PropType } from 'vue'
import { default as McForm, IForm } from '@/base-ui/form/index'

export default defineComponent({
  components: {
    McForm,
  },
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true,
    },
  },
  setup(props) {
    const centerDialogVisible = ref(true)
    const modalItems = props.modalConfig.formItems ?? []
    const modalConfig: any = {}
    for (const iterator of modalItems) {
      modalConfig[iterator.field] = ''
    }
    const modalData = ref(modalConfig)
    return {
      centerDialogVisible,
      modalData,
    }
  },
})
</script>

<style scoped lang="less"></style>
