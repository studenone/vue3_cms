// 使用类封装性更强
class LocalCache {
  setCache(key: string, value: any, isLocalStorage?: boolean) {
    if (isLocalStorage || isLocalStorage === undefined) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key: string, isLocalStorage?: boolean) {
    if (isLocalStorage || isLocalStorage === undefined) {
      return JSON.parse(window.localStorage.getItem(key) ?? '""')
    }
  }
  deleteCache(key: string, isLocalStorage?: boolean) {
    if (isLocalStorage || isLocalStorage === undefined) {
      window.localStorage.removeItem(key)
    }
  }
  clearCache(isLocalStorage?: boolean) {
    if (isLocalStorage || isLocalStorage === undefined) {
      window.localStorage.clear()
    }
  }
}

export default new LocalCache()
