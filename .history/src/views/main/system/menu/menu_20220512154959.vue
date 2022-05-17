<template>
  <div class="menu">
    <page-content :tableConfig="tableConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import pageContent from '@/components/page-content/index'
import { tableConfig } from './config/content-config'
import { mapMenusToPermissions } from '@/utils/map-menus'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'mc-menu',
  components: {
    pageContent,
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.system.menuList)
    let permission = []
    watch(
      () => userMenus,
      () => {
        permission = mapMenusToPermissions(userMenus.value)
        console.log('[permission2]', permission)
      },
      {
        deep: true,
      }
    )
    return { tableConfig }
  },
})
</script>

<style scoped></style>
