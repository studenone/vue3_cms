import { useStore } from '@/store/index'

export function usePermissions(pageName: string, permissionName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${permissionName}`
}
