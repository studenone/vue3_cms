import type { IResponseType } from '@/store/types/index'

export const unity = (promise: Promise<IResponseType>) => {
  return promise.then((res) => [null, res]).catch((err) => [err])
}
