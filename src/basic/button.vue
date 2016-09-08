<template>
  <button :type="htmlType" class="button" :class="[btnClasses]">
    <p-icon v-if="hasIcon" :type="iconCls"></p-icon>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'pButton',
    componentName: 'button',
    props: {
      htmlType: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: ''
      },
      icon: String,
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

        return classes.join(' ')
      },

      hasIcon () {
        return this.loading || this.icon
      },

      iconCls () {
        return this.loading ? 'loading' : this.icon
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
<style media="screen">
  .button .fa {
    margin-right: 4px;
  }
</style>
