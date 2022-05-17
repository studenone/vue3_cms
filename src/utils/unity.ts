export const unity = (promise: Promise<any>) => {
  return promise.then((res) => [null, res]).catch((err) => [err])
}
