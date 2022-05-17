<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="30%"
      center
      @close="handleClose"
    >
      <mc-form v-bind="modalConfig" v-model="modalData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
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
    const centerDialogVisible = ref(false)
    const isCreate = ref(false)
    const modalItems = props.modalConfig.formItems ?? []
    const formConfig: any = {}
    for (const iterator of modalItems) {
      formConfig[iterator.field] = ''
    }
    const modalData = ref(formConfig)
    // reset form data
    const resetModal = () => {
      for (const iterator in formConfig) {
        modalData.value[iterator] = ''
      }
    }
    // set form data
    const setModalData = (payload: any) => {
      for (const iterator in formConfig) {
        modalData.value[iterator] = payload[iterator]
      }
    }
    // close modal
    const handleClose = () => {
      resetModal()
    }
    // 处理模态框事件
    const handleConfirm = (): void => {
      centerDialogVisible.value = false
      if (isCreate.value) {
        // 新建用户
      } else {
        //编辑用户
      }
    }
    const handleCancel = (): void => {
      centerDialogVisible.value = false
    }
    return {
      centerDialogVisible,
      isCreate,
      modalData,
      handleClose,
      resetModal,
      setModalData,
      handleConfirm,
      handleCancel,
    }
  },
})
</script>

<style scoped lang="less"></style>
