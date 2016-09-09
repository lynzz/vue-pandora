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
        v-if="trueValue || falseValue"
        type="checkbox"
        :disabled="disabled"
        :true-value="trueValue"
        :false-value="falseValue"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        class="checkbox-original"
        type="checkbox"
        :disabled="disabled"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false"
        :value="val">
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
      value: {},
      label: {
        type: String
      },
      val: String,
      indeterminate: Boolean,
      disabled: Boolean,
      trueValue: [String, Number],
      falseValue: [String, Number]
    },

    computed: {
      _value: {
        get () {
          console.log(this.value)
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
        let type = Object.prototype.toString.call(this._value)
        console.log(this._value, type)
        if (type === '[object Boolean]') {
          return this._value
        } else if (type === '[object Array]') {
          return this._value.indexOf(this.val) > -1
        } else if (type === '[object String]' || type === '[object Number]') {
          return this._value === this.trueValue
        }
      }
    },

    data () {
      return {
        focus: false
      }
    },

    watch: {
      checked (sure) {
        this.$emit('change', sure)
      }
    }
  }
</script>
