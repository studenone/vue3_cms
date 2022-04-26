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
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
    <div class="account-control">
      <el-checkbox v-model="remember">记住密码</el-checkbox>
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
import { getRules } from '../hooks/checkInput' //使用hooks将代码逻辑抽离
import type { ElForm } from 'element-plus'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const labelPosition = ref('right')
    const account = reactive({
      name: '',
      password: '',
    })
    const remember = ref(false)
    // 得到表单元素
    const formRef = ref<InstanceType<typeof ElForm>>() //获取表单元素
    // 编写验证规则
    const rules = getRules()
    // 监听登录点击
    const handlerLogin = () => {
      formRef.value?.validate((validate) => {
        if (validate) {
          loginAction()
        } else {
          console.log('[valid]', validate)
        }
      })
      console.log('[login]')
    }
    // 登录请求
    const loginAction = () => {
      console.log('[登录事件]')
    }
    return {
      labelPosition,
      account,
      rules,
      handlerLogin,
      loginAction,
      formRef,
      remember,
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
