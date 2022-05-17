import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

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
    }
    console.log('[world]', row)
  }
  return [handleCreate, handleEdit]
}
