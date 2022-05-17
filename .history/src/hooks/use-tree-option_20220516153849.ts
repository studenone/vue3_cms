export function useTreeOption(menuList: any[]) {
  const getMenuLeafKeys = (menuList: any[]) => {
    const leafKeys: number[] = []
    const _recurseGetLeaf = (menuList: any[]) => {
      for (const iterator of menuList) {
        if (iterator.children) {
          _recurseGetLeaf(iterator.children)
        } else {
          leafKeys.push(iterator.id)
        }
      }
    }
    _recurseGetLeaf(menuList)
    return leafKeys
  }
  const res = getMenuLeafKeys(menuList)
  console.log('[tree]', res)

  return res
}
