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
    >
      <template #default>
        <div class="tree">
          <el-tree
            :data="data"
            :props="defaultProps"
            show-checkbox
            node-key="id"
          />
        </div>
      </template>
      <template #title> 新建角色</template>
    </page-modal>
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
import { usePageSearch } from '@/hooks/use-page-search'

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
    // 3、控制search的hooks
    const [pageContent, handleQuery, handleReset] = usePageSearch()
    // 4、页面特有的一些内容
    const defaultProps = {
      children: 'children',
      label: 'label',
      disabled: 'disabled',
    }

    const data = [
      {
        id: 1,
        label: 'Level one 1',
        children: [
          {
            id: 3,
            label: 'Level two 2-1',
            children: [
              {
                id: 4,
                label: 'Level three 3-1-1',
              },
              {
                id: 5,
                label: 'Level three 3-1-2',
                disabled: true,
              },
            ],
          },
          {
            id: 2,
            label: 'Level two 2-2',
            disabled: true,
            children: [
              {
                id: 6,
                label: 'Level three 3-2-1',
              },
              {
                id: 7,
                label: 'Level three 3-2-2',
                disabled: true,
              },
            ],
          },
        ],
      },
    ]
    return {
      tableConfig,
      formConfig,
      modalConfig,
      modalConfigRef,
      pageModal,
      handleCreate,
      handleEdit,
      dataId,
      pageContent,
      handleQuery,
      handleReset,
      defaultProps,
      data,
    }
  },
})
</script>

<style scoped lang="less">
.role {
  .tree {
    padding: 10px 40px;
  }
}
</style>
