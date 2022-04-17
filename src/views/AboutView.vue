<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ $store.state.name }}</h2>
    <el-button type="primary">你好啊</el-button>
    <el-button type="success">你好啊2</el-button>
    <el-button type="warning">你好啊3</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    let num = 10
    num = 20
    console.log('[about]', num)
  },
})
</script>
