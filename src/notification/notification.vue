<template>
  <div class="notification" :class="[noticeCls]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'pNotification',
    componentName: 'notification',
    props: {
      type: String
    },
    computed: {
      noticeCls () {
        return `is-${this.type}`
      }
    }
  }
</script>
