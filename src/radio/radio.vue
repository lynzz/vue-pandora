<template>
  <label class="ant-radio-wrapper" :class="{'ant-radio-wrapper-disabled': disabled}">
    <span
      class="ant-radio"
      :class="{
        'ant-radio-checked': currentValue === checkedValue,
        'ant-radio-focus': focus,
        'ant-radio-disabled': disabled
      }">
      <span class="ant-radio-inner">
        <input
          type="radio"
          class="ant-radio-input"
          :value="checkedValue"
          :disabled="disabled"
          v-model="currentValue"
          @focus="focus = true"
          @blur="focus = false"
        >
      </span>
    </span>
    <span>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'pRadio',
    componentName: 'radio',
    props: {
      value: [String, Number],
      checkedValue: {
        type: [String, Number],
        required: true
      },
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean
    },
    data () {
      return {
        focus: false
      }
    },
    computed: {
      currentValue: {
        get () {
          return this.value !== undefined ? this.value : this.$parent.value
        },
        set (newValue) {
          if (this.value !== undefined) {
            this.$emit('input', newValue)
          } else {
            this.$parent.$emit('input', newValue)
          }
        }
      }
    }
  }
</script>
