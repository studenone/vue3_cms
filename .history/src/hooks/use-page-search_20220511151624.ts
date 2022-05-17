// 在业务组件里调用网络请求
const pageContent = ref<InstanceType<typeof PageContent>>() //要暴露在渲染上下文中
const handleQuery = (value: any) => {
  console.log('[handle]', value, pageContent.value)
  pageContent.value?.getPageData(value)
}
