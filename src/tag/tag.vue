<template>
  <transition :name="closeTransition ? '' : 'md-fade-center'">
    <span class="ant-tag" :class="[tagClass]" :style="tagStyle">
      <span class="ant-tag-text">
        <slot></slot>
      </span>
      <p-icon type="cross" v-if="closable" @click.native="handleClose"></p-icon>
    </span>
  </transition>
</template>

<script>
  export default {
    name: 'pTag',
    props: {
      color: {
        type: String,
        default: ''
      },
      closeTransition: {
        type: Boolean,
        default: false
      },
      closable: Boolean
    },
    computed: {
      tagClass () {
        let cls = []

        if (this.color) {
          cls.push('ant-tag-has-color')
          cls.push(`ant-tag-${this.color}`)
        }

        return cls.join(' ')
      },
      tagStyle () {
        if (this.color && /^#\w+/.test(this.color)) {
          return `background-color: ${this.color}`
        }
        return ''
      }
    },
    methods: {
      handleClose (e) {
        this.$emit('close', e)
      }
    }
  }
</script>
