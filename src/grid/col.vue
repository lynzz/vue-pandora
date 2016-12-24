<template>
  <div :class="[colCls]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'pCol',
    componentName: 'col',
    props: {
      span: Number,
      order: {
        type: Number,
        default: 0
      },
      offset: {
        type: Number,
        default: 0
      },
      push: {
        type: Number,
        default: 0
      },
      pull: {
        type: Number,
        default: 0
      },
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },
    computed: {
      colCls () {
        let cls = []
        if (this.span) {
          cls.push(`ant-col-${this.span}`)
        }
        if (this.offset) {
          cls.push(`ant-col-offset-${this.offset}`)
        }
        if (this.order) {
          cls.push(`ant-col-order-${this.order}`)
        }
        if (this.pull) {
          cls.push(`ant-col-pull-${this.pull}`)
        }
        if (this.push) {
          cls.push(`ant-col-push-${this.push}`)
        }
        if (this.xs) {
          cls.push(`ant-col-xs-${this.xs}`)
        }
        if (this.sm) {
          cls.push(`ant-col-sm-${this.sm}`)
        }
        if (this.md) {
          cls.push(`ant-col-md-${this.md}`)
        }
        if (this.lg) {
          cls.push(`ant-col-lg-${this.lg}`)
        }
        return cls.join(' ')
      }
    }
  }
</script>
