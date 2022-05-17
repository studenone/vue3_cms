<template>
  <div class="main-page">
    <el-container class="theme-container">
      <el-aside
        class="side-bar"
        :style="{ width: isCollapse ? '60px' : '200px' }"
      >
        <side-nav :isCollapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="nav-bar">
          <header-nav @foldChange="handlerFold" />
        </el-header>
        <el-main class="page-content">
          <div class="custom-bg"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SideNav from '@/components/side-nav/index'
import HeaderNav from '@/components/header-nav/index'

export default defineComponent({
  name: 'MainPage',
  components: {
    SideNav,
    HeaderNav,
  },
  setup() {
    const isCollapse = ref<boolean>()
    const handlerFold = (payload: boolean) => {
      isCollapse.value = payload
    }
    return {
      isCollapse,
      handlerFold,
    }
  },
})
</script>

<style scoped lang="less">
.main-page {
  width: 100%;
  height: 100%;
  .theme-container {
    height: 100%;
    .side-bar {
      width: 200px;
      z-index: 10;
      margin: 0;
      overflow-y: auto;
      cursor: pointer;
      background-color: #fff;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    .page {
      .nav-bar {
        display: flex;
        align-items: center;
        height: 48px;
        background-color: pink;
      }
      .page-content {
        text-align: center;
        background-color: whitesmoke;
        .custom-bg {
          border-radius: 5px;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
