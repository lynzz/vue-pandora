<template>
  <label class="checkbox" :class="{'is-disabled': disabled}">
    <input v-if="disabled" type="checkbox" v-model="checked" disabled>
    <input v-else type="checkbox" @change="onChange($event)" v-model="checked">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    props: {
      checked: {
        type: Boolean,
        default: false
      },

      value: {
        type: String
      },

      disabled: {
        type: Boolean,
        default: false
      },

      onChange: {
        type: Function,
        default: () => {}
      }
    }
  }
</script>
