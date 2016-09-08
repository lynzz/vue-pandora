<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
  import emitter from 'src/mixins/emitter'
  export default {
    mixins: [emitter],
    props: {
      value: [String, Number]
    },
    watch: {
      value (newValue) {
        this.$emit('change', newValue)
        this.dispatch('form-item', 'form.change', [newValue])
      }
    }
  }
</script>
