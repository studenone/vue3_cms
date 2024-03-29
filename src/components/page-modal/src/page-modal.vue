<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      destroy-on-close
      width="30%"
      center
      @close="handleClose"
    >
      <template #title>
        <slot name="title">新建数据</slot>
      </template>
      <mc-form v-bind="modalConfig" v-model="modalData" />
      <!-- 预留插槽 -->
      <slot></slot>
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
import { useStore } from '@/store/index'

export default defineComponent({
  components: {
    McForm,
  },
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    otherField: {
      // 外部传进来的字段值
      type: Object,
      default: () => ({}),
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
    const store = useStore()
    const handleConfirm = (): void => {
      centerDialogVisible.value = false
      if (isCreate.value) {
        // 新建用户
        store.dispatch('system/createPageListAction', {
          pageName: props.pageName,
          data: {
            ...modalData.value,
            ...props.otherField,
          },
        })
      } else {
        //编辑用户
        store.dispatch('system/editPageListAction', {
          pageName: props.pageName,
          data: {
            ...modalData.value,
            ...props.otherField,
          },
          id: props.id,
        })
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
