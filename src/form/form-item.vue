<template>
  <p-row>
    <p-col :size="labelSize" v-if="!hideLabel">
      <div class="control-label">{{label}}</div>
    </p-col>
    <p-col :offset="btnOffset">
      <slot></slot>
      <p class="help"></p>
    </p-col>
  </p-row>
</template>

<script>
  import pRow from '../basic/row'
  import pCol from '../basic/col'

  export default {
    props: {
      label: String,
      name: String,
      labelSize: {
        type: String,
        default: '3'
      },
      offset: {
        type: String,
        default: '3'
      },
      hideLabel: Boolean
    },

    computed: {
      btnOffset () {
        return this.hideLabel ? this.offset : ''
      }
    },

    components: {
      pRow,
      pCol
    }
  }
</script>
