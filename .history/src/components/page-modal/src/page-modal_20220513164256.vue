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
    const centerDialogVisible = ref(false)
    const modalItems = props.modalConfig.formItems ?? []
    const formConfig: any = {}
    for (const iterator of modalItems) {
      formConfig[iterator.field] = ''
    }
    const modalData = ref(formConfig)
    // reset form data
    const resetModal = () => {
      for (const iterator in formConfig) {
        modalData.value[iterator] = formConfig[iterator]
      }
    }
    const setModalData = (payload: any) => {
      for (const iterator in formConfig) {
        modalData.value[iterator] = payload[iterator]
      }
    }
    return {
      centerDialogVisible,
      modalData,
      resetModal,
      setModalData,
    }
  },
})
</script>

<style scoped lang="less"></style>
