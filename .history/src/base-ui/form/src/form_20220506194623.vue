<template>
  <div class="mc-form">
    <el-form :label-position="right" label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <template
                    v-for="subitem in item.options"
                    :key="subitem.value"
                  >
                    <el-option
                      :label="subitem.label"
                      :value="subitem.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOption"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { IFormItem } from '../types/index'
// 封装组件，高阶配置

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default() {
        return []
      },
    },
    labelWidth: {
      type: String,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
