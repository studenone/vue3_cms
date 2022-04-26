import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

function getRules() {
  const rules = reactive<FormRules>({
    name: [
      {
        required: true,
        message: '用户名是必传内容~',
        trigger: 'blur',
      },
      {
        pattern: /^[a-z0-9]{5,10}$/,
        message: '用户名必须是5~10个字母或者数字~',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密码是必传内容~',
        trigger: 'blur',
      },
      {
        pattern: /^[a-z0-9]{3,}$/,
        message: '用户名必须是3位以上的字母或者数字~',
        trigger: 'change',
      },
    ],
  })
  return rules
}

function getPhoneRules() {
  const rules = reactive<FormRules>({
    num: [
      {
        required: true,
        message: '手机号是必传内容~',
        trigger: 'blur',
      },
      {
        pattern: /^[0-9]{11}$/,
        message: '手机号必须是11位数字',
        trigger: 'blur',
      },
    ],
    code: [
      {
        required: true,
        message: '验证码是必传内容~',
        trigger: 'blur',
      },
      {
        pattern: /^[a-zA-Z0-9]{4}$/,
        message: '验证码是4位',
        trigger: 'change',
      },
    ],
  })
  return rules
}
export { getRules, getPhoneRules }
