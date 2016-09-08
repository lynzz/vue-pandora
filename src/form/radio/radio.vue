<template>
  <label class="radio">
    <span class="radio-input">
      <span
        class="radio-inner"
        :class="{
          'is-checked': _value === label,
          'is-focus': focus,
          'is-disabled': disabled
        }">
      </span>
      <input
        type="radio"
        class="radio-original"
        :value="label"
        v-model="_value"
        :disabled="disabled"
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
    props: {
      value: [String, Number],
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
      _value: {
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
