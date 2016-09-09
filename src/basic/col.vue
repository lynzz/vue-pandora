<template>
  <div class="column" :class="[colCls]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'pCol',
    componentName: 'col',
    props: {
      size: String,
      offset: String
    },
    computed: {
      colCls () {
        let cls = []
        if (this.size) {
          cls.push(`is-${this.size}`)
        }
        if (this.offset) {
          cls.push(`is-offset-${this.offset}`)
        }
        return cls.join(' ')
      }
    }
  }
</script>
