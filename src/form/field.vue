<template>
  <p-row>
    <p-col :size="labelSize" v-if="!hideLabel">
      <div class="control-label">{{field.label}}</div>
    </p-col>
    <p-col :offset="btnOffset">
      <slot></slot>
      <template v-if="isInput">
        <input
          class="input"
          :type="field.type"
          :placeholder="field.placeholder"
          :field="field.name"
          v-validate="field.validate"
         />
      </template>
      <template v-else>
        <textarea
          class="textarea"
          :placeholder="field.placeholder"
          :field="field.name"
          v-validate="field.validate">
        </textarea>
      </template>
      <p class="help"></p>
    </p-col>
  </p-row>
</template>

<script>
  import pRow from '../basic/row'
  import pCol from '../basic/col'

  export default {
    props: {
      field: {
        type: Object,
        default () {
          return {
            label: '',
            type: 'text',
            name: ''
          }
        }
      },
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
      },

      isInput () {
        return this.field.type ? this.field.type !== 'textarea' : true
      }
    },

    components: {
      pRow,
      pCol
    }
  }
</script>
