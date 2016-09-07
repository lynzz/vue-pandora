<template>
  <div>
    <input v-if="isInput" class="input" :type="type" :value="value" :placeholder="placeholder" />
    <textarea v-else class="textarea" :placeholder="placeholder">{{value}}</textarea>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: String,
      placeholder: String
    },
    computed: {
      isInput () {
        return this.type !== 'textarea'
      }
    }
  }
</script>
