import { useStore } from '@/store/index'

export function usePermissions(pageName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
}
