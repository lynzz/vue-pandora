<template>
  <div :class="[rowCls]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'pRow',
    componentName: 'row',
    props: {
      type: String,
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      }
    },
    computed: {
      rowCls () {
        let cls = []
        if (this.type) {
          cls.push('ant-row-flex')
          if (this.justify) {
            cls.push(`ant-row-flex-${this.justify}`)
          }
          if (this.align) {
            cls.push(`ant-row-flex-${this.align}`)
          }
        }
        return 'ant-row'
      }
    }
  }
</script>
