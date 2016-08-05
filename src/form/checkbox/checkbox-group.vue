<template>
  <div class="checkbox-group">
    <checkbox
      v-for="option in options"
      :disabled="option.disabled"
      :checked="option.checked"
      :on-change="handleChange"
      v-ref:checkbox
      :value="option.value">
      {{option.label}}
    </checkbox>
  </div>
</template>

<script>
  import Checkbox from './checkbox'
  export default {
    props: {
      options: {
        type: Array
      },
      onChange: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      handleChange (e) {
        const ret = this.$refs.checkbox.filter(item => {
          return item.checked && !item.disabled
        }).map(item => item.value)
        this.onChange(ret)
      }
    },
    components: {
      Checkbox
    }
  }
</script>
<style scoped>
  .checkbox-group .checkbox{
    display: inline-block;
    margin-left: 8px;
  }
  .checkbox-group .checkbox:first-child {
    margin-left: 0
  }
</style>
