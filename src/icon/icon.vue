<template>
  <i class="anticon" :class="[iconCls]"></i>
</template>

<script>
  export default {
    name: 'pIcon',
    props: {
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      iconCls () {
        if (this.type === 'loading') {
          return 'anticon-spin anticon-loading'
        }
        return `anticon-${this.type}`
      }
    }
  }
</script>
