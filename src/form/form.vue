<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
  import Schema from 'async-validator'
  export default {
    props: {
      schema: {}
    },

    ready () {
      /*eslint new-cap:0 */
      this.validator = new Schema(this.schema)
    }
  }
</script>
