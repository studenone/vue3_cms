<template>
  <div class="account">
    <el-form
      label-width="80px"
      :label-position="labelPosition"
      :rules="rules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" autocomplete="on" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
    <div class="account-control">
      <el-checkbox v-model="isKeep">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handlerLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { getRules } from '../hooks/checkInput' //使用hooks将代码逻辑抽离
import type { ElForm } from 'element-plus'
import localCache from '../../../utils/cache' // 封装的工具方法

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const labelPosition = ref('right')
    const account = reactive({
      name: localCache.getCache('cms_name') ?? '',
      password: localCache.getCache('cms_pwd') ?? '',
    })
    const isKeep = ref(false)
    const store = useStore()
    // 得到表单元素
    const formRef = ref<InstanceType<typeof ElForm>>() //获取表单元素
    // 编写验证规则
    const rules = getRules()
    // 监听登录点击
    const handlerLogin = () => {
      formRef.value?.validate((validate) => {
        if (validate) {
          // 1,判断是否记住密码
          if (isKeep.value) {
            // 本地缓存
            localCache.setCache('cms_name', account.name)
            localCache.setCache('cms_pwd', account.password)
          } else {
            localCache.deleteCache('cms_name')
            localCache.deleteCache('cms_pwd')
          }
          // 2,发起请求，验证登录
          loginAction()
        } else {
          // 表单规则验证失败后的处理
          console.log('[valid]', validate)
        }
      })
    }
    // 登录请求
    const loginAction = (isKeep = true) => {
      // 发起请求
      if (isKeep) {
        store.dispatch('login/accountLogin', { ...account })
      }
    }
    return {
      labelPosition,
      account,
      rules,
      handlerLogin,
      loginAction,
      formRef,
      isKeep,
    }
  },
})
</script>

<style scoped lang="less">
:deep(.el-input__inner::placeholder) {
  color: #75758bb3;
}
.account {
  .account-control {
    display: flex;
    justify-content: space-evenly;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
