<template>
  <div class="control radio-group">
    <slot></slot>
  </div>
</template>

<script>
  import emitter from 'src/mixins/emitter'
  export default {
    name: 'pRadioGroup',
    componentName: 'radio-group',
    mixins: [emitter],
    props: {
      value: [String, Number]
    },
    watch: {
      value (newValue) {
        this.$emit('change', newValue)
        this.dispatch('form-item', 'p.form.change', [newValue])
      }
    }
  }
</script>
