<template>
  <button :type="htmlType" class="button" :class="[btnClasses]">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    props: {
      htmlType: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      value: {},
      selected: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      btnClasses () {
        var classes = []

        if (this.type) {
          classes.push(`is-${this.type}`)
        }

        if (this.size) {
          classes.push(`is-${this.size}`)
        }

        if (this.shape) {
          classes.push(`is-${this.shape}`)
        }

        if (this.disabled) {
          classes.push('is-disabled')
        }

        if (this.loading) {
          classes.push('is-loading')
        }

        return classes.join(' ')
      }
    },

    ready () {
      if (this.$parent.$isButtonGroup) {
        if (!this.value) {
          this.value = this.$el.textContent.trim()
        }
        this.$el.addEventListener('click', () => {
          this.$dispatch('onButtonClick', this)
        })
      }
    }
  }
</script>
