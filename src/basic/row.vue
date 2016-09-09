<template>
  <div class="columns" :class="[rowCls, { 'is-multiline': multiline, 'is-gapless': gapless }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'pRow',
    componentName: 'row',
    props: {
      type: String,
      multiline: {
        type: Boolean,
        default: false
      },
      gapless: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      rowCls () {
        return this.type ? `is-${this.type}` : ''
      }
    }
  }
</script>
