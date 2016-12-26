<template>
  <div class="ant-checkbox-group" type="checkbox">
    <slot></slot>
  </div>
</template>

<script>
  import emitter from '../mixins/emitter'
  export default {
    name: 'pCheckboxGroup',
    componentName: 'checkbox-group',
    mixins: [emitter],
    props: {
      value: null
    },
    watch: {
      value (newValue) {
        this.$emit('change', newValue)
        this.dispatch('form-item', 'p.form.change', [newValue])
      }
    }
  }
</script>
