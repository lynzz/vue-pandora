<template>
  <label class="checkbox" :class="{'is-disabled': disabled}">
    <span class="checkbox-input">
      <span
        class="checkbox-inner"
        :class="{
          'is-disabled': disabled,
          'is-checked': checked,
          'is-focus': focus
        }">
        </span>
      <input
        class="checkbox-original"
        type="checkbox"
        :disabled="disabled"
        v-model="currentValue"
        @focus="focus = true"
        @blur="focus = false"
        :value="checkedValue">
    </span>
    <span class="checkbox-label">
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
