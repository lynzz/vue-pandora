<template>
  <div class="control" :class="{'is-grouped': !hasAddons, 'has-addons': hasAddons}">
    <p :class="{control: hasAddons}">
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
