export function usePageModal() {
  const pageModal = ref<InstanceType<typeof pageContent>>()
  const handleCreate = () => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
    }
    console.log('hello')
  }
  const handleEdit = (row: any) => {
    if (pageModal.value) {
      pageModal.value.centerDialogVisible = true
    }
    console.log('[world]', row)
  }
}
