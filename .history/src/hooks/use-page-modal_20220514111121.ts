import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

type CallbackType = (n?: any) => void

export function usePageModal(createCb?: CallbackType, editCb?: CallbackType) {
  const pageModal = ref<InstanceType<typeof PageModal>>()
  const handleCreate = () => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
      pageModal.value.resetModal()
    }
    createCb && createCb()
  }
  const handleEdit = (row: any) => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
      pageModal.value.setModalData(row)
    }
    // 定义回调函数
    editCb && editCb(row)
  }
  return [pageModal, handleCreate, handleEdit]
}
