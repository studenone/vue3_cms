<template>
  <div class="header-nav">
    <span @click="changeExpand" class="fold-icon">
      <el-icon v-if="isExpand" :size="30"><expand /></el-icon>
      <el-icon v-else :size="30"><fold /></el-icon>
    </span>
    <div class="header-content">
      <bread-crumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import BreadCrumb from './bread-crumb.vue'
// import { IBreadcrumb } from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumb } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Expand,
    Fold,
    UserInfo,
    BreadCrumb,
  },
  setup(props, { emit }) {
    const isExpand = ref(false) // 控制缩放
    const changeExpand = () => {
      isExpand.value = !isExpand.value
      emit('foldChange', isExpand.value) // 发送事件至main页面，控制样式变化
    }
    let breadcrumbs = computed(() => {
      const store = useStore()
      const route = useRoute()
      return pathMapBreadcrumb(store.state.login.userMenu, route.path)
    }) //传递面包屑数据,用计算属性跟踪变化

    return {
      isExpand,
      changeExpand,
      breadcrumbs,
    }
  },
})
</script>

<style scoped lang="less">
.header-nav {
  display: flex;
  width: 100%;
  .fold-icon {
    cursor: pointer;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
