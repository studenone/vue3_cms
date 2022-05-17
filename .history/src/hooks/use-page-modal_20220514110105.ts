import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

type CallbackType = () => void

export function usePageModal() {
  const pageModal = ref<InstanceType<typeof PageModal>>()
  const handleCreate = () => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
      pageModal.value.resetModal()
    }
    console.log('hello')
  }
  const handleEdit = (row: any) => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
      pageModal.value.setModalData(row)
    }
    console.log('[world]', row)
  }
  return [pageModal, handleCreate, handleEdit]
}
