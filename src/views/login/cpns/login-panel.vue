<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="account" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue' // 按需引入图标
import LoginAccount from './login-account.vue' //分开登录模块
import LoginPhone from './login-phone.vue' //手机独立逻辑

export default defineComponent({
  name: 'LoginPanel',
  setup() {
    const account = ref<InstanceType<typeof LoginAccount>>() //获取组件构造函数，并传入实例类型
    setTimeout(() => {
      console.log(account.value?.loginAction())
    }, 5000)
    return {
      account,
    }
  },
  components: {
    User,
    Iphone,
    LoginAccount,
    LoginPhone,
  },
})
</script>

<style scoped lang="less">
.login-panel {
  width: 350px;
  min-width: 350px;
  padding: 25px;
  margin-bottom: 250px;
  background-color: hsla(0, 0%, 90%, 0.9);
  & > h2 {
    text-align: center;
  }
}
</style>
