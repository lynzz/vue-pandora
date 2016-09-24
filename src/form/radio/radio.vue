<template>
  <label class="radio" :class="{'is-disabled': disabled}">
    <span class="radio-input">
      <span
        class="radio-inner"
        :class="{
          'is-checked': currentValue === checkedValue,
          'is-focus': focus,
          'is-disabled': disabled
        }">
      </span>
      <input
        type="radio"
        class="radio-original"
        :value="checkedValue"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focus = true"
        @blur="focus = false"
      >
    </span>
    <span class="radio-label">
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
