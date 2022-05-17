<template>
  <div class="user">
    <div class="search">
      <mc-form :formItems="formItems"></mc-form>
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
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        rules: [],
        placeholder: '请输入用户名',
      },
      {
        type: 'password',
        label: '密码',
        rules: [],
        placeholder: '请输入密码',
      },
      {
        type: 'select',
        label: '爱好',
        rules: [],
        placeholder: '请输入运动',
        options: [
          {
            label: '篮球',
            value: 'basketball',
          },
          {
            label: '足球',
            value: 'football',
          },
        ],
      },
      {
        type: 'datepicker',
        label: '创建时间',
        rules: [],
        placeholder: '请输入时间',
        otherOption: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: '',
        },
      },
    ] // 使用ts配置化生成组件
    return {
      formItems,
    }
  },
})
</script>

<style scoped></style>
