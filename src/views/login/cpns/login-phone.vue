<template>
  <div class="phone">
    <el-form
      label-width="80px"
      :label-position="labelPosition"
      :model="phone"
      :rules="rules"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="phone.code" class="w-50" />
        <el-button type="primary" class="submit">获取验证码</el-button>
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
import { getPhoneRules } from '../hooks/checkInput' //使用hooks将代码逻辑抽离

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
    // 监听登录点击
    const handlerLogin = () => {
      console.log('[login]')
    }
    return {
      labelPosition,
      phone,
      rules,
      handlerLogin,
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
