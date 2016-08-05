<template>
  <div class="control" :class="{'is-grouped': !hasAddons, 'has-addons': hasAddons}">
    <template v-if="hasAddons">
      <slot></slot>
    </template>
    <p v-else class="control">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      hasAddons: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
