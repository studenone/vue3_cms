<template>
  <div class="phone">
    <el-form
      label-width="80px"
      :label-position="labelPosition"
      :model="phone"
      :rules="rules"
      ref="phoneFormRef"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="phone.code" class="w-50" />
        <el-button type="primary" class="submit" @click="checkCode"
          >获取验证码</el-button
        >
      </el-form-item>
    </el-form>
    <el-button type="primary" class="login-btn" @click="handlerLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { getPhoneRules } from '../hooks/checkInput' //使用hooks将代码逻辑抽离
import { mcRequest } from '../../../service/index'
export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const labelPosition = ref('right')
    const phone = reactive({
      num: '',
      code: '',
    })
    // 编写验证规则
    const rules = getPhoneRules()
    const phoneFormRef = ref<InstanceType<typeof ElForm>>() // 需要返回，内部逻辑貌似是渲染上下文绑定的
    const store = useStore()
    let code = ref<string>()
    // 监听登录点击
    const handlerLogin = () => {
      phoneFormRef.value?.validate((validate) => {
        if (validate && code.value === phone.code) {
          console.log('[auth code]')
          store.dispatch('login/phoneLogin', { ...phone })
        }
      })
    }
    // 获取验证码，登录
    const checkCode = async () => {
      let res: any = await mcRequest.get({
        baseURL: 'http://localhost:3000',
        url: 'login/auth',
      })
      code.value = res.data.code
    }
    return {
      labelPosition,
      phone,
      rules,
      handlerLogin,
      checkCode,
      phoneFormRef,
    }
  },
})
</script>

<style scoped lang="less">
.phone {
  .w-50 {
    width: 50%;
  }
  .submit {
    margin-left: 10px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
