<template>
  <div class="app">
    <login></login>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import login from './views/login/login.vue'
export default defineComponent({
  components: {
    login,
  },
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
