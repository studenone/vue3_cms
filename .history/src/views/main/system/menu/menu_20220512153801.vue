<template>
  <div class="menu">
    <page-content :tableConfig="tableConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
    watch(
      () => userMenus,
      () => {
        mapMenusToPermissions(userMenus.value)
      }
    )
    return { tableConfig }
  },
})
</script>

<style scoped></style>
