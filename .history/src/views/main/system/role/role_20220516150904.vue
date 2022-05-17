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
      :otherField="otherField"
    >
      <template #default>
        <div class="tree">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            @check="handleCheck"
            ref="treeRef"
          />
        </div>
      </template>
      <template #title> 新建角色</template>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import { tableConfig } from './config/content-config'
import formConfig from './config/search-config'
import { modalConfig } from './config/modal-config'
import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'
import { useStore } from '@/store'

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
    // 本页面的特殊回调
    const treeRef = ref()
    const otherField = ref({
      menuList: [],
    })
    const treeEditCb = () => {
      treeRef.value!.setCheckedKeys([...otherField.value?.menuList], false)
    }
    const [pageModal, handleCreate, handleEdit, dataId] = usePageModal()
    // 3、控制search的hooks
    const [pageContent, handleQuery, handleReset] = usePageSearch()
    // 4、页面特有的一些内容
    const defaultProps = {
      children: 'children',
      label: 'name',
    }
    const store = useStore()
    const treeData = computed(() => store.state.entireMenu) //树形控件
    const handleCheck = (n1: any, n2: any) => {
      const checkKeys = n2.checkedKeys
      const halfKeys = n2.halfCheckedKeys
      const permissionList = [...checkKeys, ...halfKeys]
      otherField.value.menuList = permissionList
    }
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
      treeData,
      otherField,
      handleCheck,
      treeRef,
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
