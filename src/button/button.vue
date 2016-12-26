<template>
  <button :disabled="disabled" :type="htmlType" class="ant-btn" :class="[btnClasses]" @click="handleClick">
    <p-icon v-if="hasIcon" :type="iconCls"></p-icon>
    <span><slot></slot></span>
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
          classes.push(`ant-btn-${this.type}`)
        }

        if (this.size) {
          classes.push(`ant-btn-${this.size}`)
        }

        if (this.shape) {
          classes.push(`ant-btn-${this.shape}`)
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

    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    },

    mounted () {
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
