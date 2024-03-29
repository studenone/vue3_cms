<template>
  <div class="mc-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-position="right" :label-width="labelWidth" :model="formData">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8" v-bind="colLayout" v-if="!item.isHidden">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
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
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import type { IFormItem } from '../types/index'
// 封装组件，高阶配置,使用官方推荐的v-model解决
interface IConfigLayout {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export default defineComponent({
  name: 'McForm',
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default() {
        return []
      },
    },
    labelWidth: {
      type: String,
      default: '100px',
    },
    itemStyle: {
      type: Object,
      default() {
        return {
          padding: '0 40px',
        }
      },
    },
    colLayout: {
      type: Object,
      default() {
        const config: IConfigLayout = {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
        }
        return config
      },
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let formData = ref((props as any).modelValue) //脱离原始引用
    // 使用watch监听对象深层次变化
    // watch(
    //   () => (props as any).modelValue,
    //   (newValue) => {
    //     formData = ref({ ...newValue })
    //   }
    // )
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true,
      }
    )

    return {
      formData,
    }
  },
})
</script>

<style scoped lang="less">
.mc-form {
  padding-top: 18px;
}
</style>
