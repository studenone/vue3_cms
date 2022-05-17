import { useStore } from '@/store/index'

export function usePermissions(pageName: string, permission) {
  const store = useStore()
  const permissions = store.state.login.permissions
}
