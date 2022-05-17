<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
