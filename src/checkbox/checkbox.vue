<template>
  <label class="ant-checkbox-wrapper" :class="{'ant-checkbox-wrapper-disabled': disabled}">
    <span
      class="ant-checkbox"
      :class="{
        'ant-checkbox-disabled': disabled,
        'ant-checkbox-checked': checked,
        'ant-checkbox-focus': focus
      }">
      <span class="ant-checkbox-inner">
        <input
          class="ant-checkbox-input"
          type="checkbox"
          :disabled="disabled"
          v-model="currentValue"
          @focus="focus = true"
          @blur="focus = false"
          :value="checkedValue">
      </span>
    </span>
    <span>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
  import emitter from 'src/mixins/emitter'

  export default {
    name: 'pCheckbox',
    componentName: 'checkbox',
    mixins: [emitter],
    props: {
      value: [Array, Boolean, Number],
      label: {
        type: String
      },
      checkedValue: String,
      disabled: Boolean
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
      },
      checked () {
        var type = Object.prototype.toString.call(this.currentValue)

        if (type === '[object Boolean]') {
          return this.currentValue
        } else if (type === '[object Array]') {
          return this.currentValue.indexOf(this.checkedValue) > -1
        }
      }
    },

    data () {
      return {
        focus: false
      }
    },

    watch: {
      checked (val) {
        this.$emit('change', val)
      }
    }
  }
</script>
