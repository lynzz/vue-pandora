<template>
  <div class="control" :class="[wrapCls, {'has-addons': $slots.prepend || $slots.append}]">
    <template v-if="type === 'text'">
      <slot name="prepend"></slot>
      <input
        class="input"
        type="text"
        :class="[inputCls]"
        :readonly="readonly"
        :disabled="disabled"
        :minlength="minlength"
        :maxlength="maxlength"
        v-model="currentValue"
        :autocomplete="autoComplete"
        :placeholder="placeholder">
      <p-icon v-if="icon" :type="icon"></p-icon>
      <slot name="append"></slot>
    </template>
    <textarea
      v-else
      class="textarea"
      v-model="currentValue"
      :disabled="disabled"
      :class="[inputCls]"
      :readonly="readonly"
      :placeholder="placeholder">
    </textarea>
  </div>
</template>

<script>
  export default {
    name: 'pInput',
    componentName: 'input',
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
      // input 是否占满整个空间
      expanded: {
        type: Boolean,
        default: true
      },
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
      wrapCls () {
        let cls = []
        if (this.loading) {
          cls.push('is-loading')
        }
        if (this.icon) {
          cls.push('has-icon')
        }
        if (this.iconRight) {
          cls.push('has-icon-right')
        }
        return cls.join(' ')
      },
      inputCls () {
        let cls = []
        if (this.theme) {
          cls.push(`is-${this.theme}`)
        }
        if (this.size) {
          cls.push(`is-${this.size}`)
        }
        if (this.expanded && this.icon) {
          cls.push('is-expanded')
        }

        return cls.join(' ')
      }
    },
    watch: {
      'value': {
        immediate: true,
        handler (val) {
          this.currentValue = val
        }
      },

      currentValue (val) {
        this.$emit('input', val)
        this.$emit('onchange', val)
        this.dispatch('form-item', 'p.form.change', [val])
      }
    }
  }
</script>
