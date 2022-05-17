export function useTreeOption() {
  console.log('[你好]')
  const getMenuLeafKeys = (menuList: any[]) => {
    const leafKeys: number[] = []
    const _recurseGetLeaf = (menuList: any[]) => {
      for (const iterator of menuList) {
        if (iterator.children) {
          _recurseGetLeaf(iterator.children)
        } else {
          leafKeys.push()
        }
      }
    }
  }
}
