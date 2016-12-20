<template>
  <transition :name="closeTransition ? '' : 'md-fade-center'">
    <span class="tag" :class="[tagClass]">
      <slot></slot>
      <button class="delete is-small" v-if="closable" @click="handleClose"></button>
    </span>
  </transition>
</template>

<script>
  export default {
    name: 'pTag',
    props: {
      type: {
        type: String,
        default: ''
      },
      size: String,
      closeTransition: {
        type: Boolean,
        default: false
      },
      closable: Boolean
    },
    computed: {
      tagClass () {
        let cls = []

        if (this.type) {
          cls.push(`is-${this.type}`)
        }

        if (this.size) {
          cls.push(`is-${this.size}`)
        }

        return cls.join(' ')
      }
    },
    methods: {
      handleClose (e) {
        this.$emit('close', e)
      }
    }
  }
</script>
