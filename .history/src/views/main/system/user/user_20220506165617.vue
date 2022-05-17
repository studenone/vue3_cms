<template>
  <div class="user">
    <div class="search">
      <mc-form></mc-form>
    </div>
    <div class="search-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import McForm, { IFormItem } from '@/base-ui/form/index'

export default defineComponent({
  name: 'user',
  components: {
    McForm,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
