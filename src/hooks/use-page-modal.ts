import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

type CallbackType = (n?: any) => void

export function usePageModal(createCb?: CallbackType, editCb?: CallbackType) {
  const pageModal = ref<InstanceType<typeof PageModal>>()
  const dataId = ref<number>(0)
  const handleCreate = () => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
      pageModal.value.isCreate = true
    }
    createCb && createCb()
  }
  const handleEdit = (row: any) => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
      pageModal.value.isCreate = false
      pageModal.value.setModalData(row)
      dataId.value = row.id
    }
    // 定义回调函数
    editCb && editCb(row)
  }
  return [pageModal, handleCreate, handleEdit, dataId]
}
