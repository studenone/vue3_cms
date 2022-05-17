<template>
  <div class="role">
    <page-search
      :searchFormConfig="formConfig"
      @queryForm="handleQuery"
      @resetForm="handleReset"
    ></page-search>
    <page-content
      :tableConfig="tableConfig"
      pageName="role"
      ref="pageContent"
      @create-change="handleCreate"
      @edit-change="handleEdit"
    >
      <template #create-name> 新建角色 </template>
    </page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      :id="dataId"
      pageName="role"
      ref="pageModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import { tableConfig } from './config/content-config'
import formConfig from './config/search-config'
import { modalConfig } from './config/modal-config'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    // 1、修改配置文件，将对象转为响应式
    const modalConfigRef = ref(modalConfig)
    // 2、控制modal的hooks
    const [pageModal, handleCreate, handleEdit, dataId] = usePageModal()
    return {
      tableConfig,
      formConfig,
      modalConfig,
      modalConfigRef,
      pageModal,
      handleCreate,
      handleEdit,
      dataId,
    }
  },
})
</script>

<style scoped></style>
