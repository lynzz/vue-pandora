<template>
  <i class="fa" :class="[iconCls]"></i>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      iconCls () {
        if (this.type === 'loading') {
          return 'fa fa-circle-o-notch fa-spin'
        }
        return `fa-${this.type}`
      }
    }
  }
</script>
