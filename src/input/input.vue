<template>
  <span :class="[inputWrapperCls]">
    <span class="ant-input-group-addon" v-if="$slots.before">
      <slot name="before"></slot>
    </span>
    <input
      v-if="type === 'text'"
      class="ant-input"
      type="text"
      :class="[inputCls]"
      :readonly="readonly"
      :disabled="disabled"
      :minlength="minlength"
      :maxlength="maxlength"
      v-model="currentValue"
      @blur="handleBlur"
      :autocomplete="autoComplete"
      :placeholder="placeholder">
    <textarea
      v-else
      class="ant-input"
      v-model="currentValue"
      @blur="handleBlur"
      :disabled="disabled"
      :class="[inputCls]"
      :readonly="readonly"
      :placeholder="placeholder">
    </textarea>
    <p-icon v-if="type === 'text' && icon" :type="icon"></p-icon>
    <span class="ant-input-group-addon" v-if="$slots.after">
      <slot name="after"></slot>
    </span>
  </span>
</template>

<script>
  import emitter from 'src/mixins/emitter'
  export default {
    name: 'pInput',
    componentName: 'input',
    mixins: [emitter],
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      loading: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      icon: String,
      iconRight: {
        type: Boolean,
        default: true
      },
      size: String,
      autoComplete: {
        type: String,
        default: 'off'
      },
      theme: String,
      maxlength: Number,
      minlength: Number
    },
    data () {
      return {
        currentValue: ''
      }
    },
    computed: {
      inputWrapperCls () {
        let cls = []

        if (this.icon) {
          cls.push('ant-input-wrapper')
        }

        if (this.$slots.before || this.$slots.after) {
          cls.push('ant-input-group')
        }

        return cls.join(' ')
      },
      inputCls () {
        let cls = []

        if (this.size) {
          cls.push(`ant-input-${this.size}`)
        }

        return cls.join(' ')
      }
    },
    methods: {
      handleBlur () {
        this.$emit('onblur', this.currentValue)
        this.dispatch('form-item', 'p.form.blur', [this.currentValue])
      }
    },
    watch: {
      'value': {
        immediate: true,
        handler (val) {
          this.currentValue = val
        }
      },

      currentValue (newVal) {
        this.$emit('input', newVal)
        this.$emit('onchange', newVal)
        this.dispatch('form-item', 'p.form.change', [newVal])
      }
    }
  }
</script>
