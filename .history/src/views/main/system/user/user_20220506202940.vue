<template>
  <div class="user">
    <div class="search">
      <mc-form v-bind="formConfig"></mc-form>
    </div>
    <div class="search-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import McForm from '@/base-ui/form/index'
import formConfig from './config/search-config'

export default defineComponent({
  name: 'user',
  components: {
    McForm,
  },
  setup() {
    // 使用ts配置化生成组件
    return {
      formConfig,
    }
  },
})
</script>

<style scoped></style>
