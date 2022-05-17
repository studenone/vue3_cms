<template>
  <div class="side-nav">
    <el-container class="nav-content">
      <el-header class="logo-container">
        <div><img src="~@/assets/img/logo.svg" alt="logo" class="logo" /></div>
        <div v-if="!isCollapse"><span>Vue3+Ts</span></div>
      </el-header>
      <el-main>
        <el-menu
          :default-active="defaultIndex"
          :collapse="isCollapse"
          class="el-menu-vertical"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
        >
          <template v-for="item in menus" :key="item.id">
            <template v-if="item.type === 1">
              <el-sub-menu :index="item.id + ''">
                <template #title>
                  <el-icon><reading /></el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <template v-for="subMenu in item.children" :key="subMenu.id">
                  <el-menu-item
                    :index="subMenu.id + ''"
                    @click="handlerClick(subMenu)"
                  >
                    <span>{{ subMenu.name }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else-if="item.type === 2">
              <el-menu-item :index="item.id + ''" @click="handlerClick(item)">
                <el-icon><reading /></el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
// import { useStore } from 'vuex' // vuex跟ts兼容性不好
import { useStore } from '@/store/index'
import { Reading } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { pathMatchRoute } from '@/utils/map-menus'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  components: { Reading },
  setup() {
    const store = useStore() // 使用自己的useStore方法
    const router = useRouter()
    const menus = computed(() => store.state.login.userMenu) //暂时写二级菜单
    const defaultIndex = ref('2') //菜单index
    const currentRoute = useRoute()
    const currentMenu = pathMatchRoute(
      store.state.login.userMenu,
      currentRoute.path
    )
    console.log('[menu]', currentMenu)

    // 点击菜单跳转路由
    const handlerClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found',
      })
    }
    return {
      menus,
      defaultIndex,
      handlerClick,
    }
  },
})
</script>

<style scoped lang="less">
.side-nav {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #545c64;
  .nav-content {
    height: 100%;
    .logo-container {
      display: flex;
      height: 48px;
      padding: 12px 10px 8px 10px;
      text-align: left;
      .logo {
        height: 100%;
        margin: 0 15px 0 5px;
      }
    }
  }
  :deep(.el-main) {
    padding: 18px 0;
  }
  :deep(.el-menu) {
    border-right: none;
  }
}
</style>
