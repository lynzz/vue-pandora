<template>
  <form :class="{'form-inline': inline}">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'pForm',
    componentName: 'form',
    props: {
      labelWidth: String,
      model: {},
      rules: {},
      inline: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        fields: {},
        fieldLength: 0
      }
    },
    created () {
      this.$on('p.form.addField', (field) => {
        this.fields[field.prop] = field
        this.fieldLength++
      })
      this.$on('p.form.removeField', (field) => {
        delete this.fields[field.prop]
        this.fieldLength--
      })
    },
    methods: {
      resetFields () {
        for (let prop in this.fields) {
          let field = this.fields[prop]
          field.resetField()
        }
      },
      validate (callback) {
        var count = 0
        var valid = true

        for (let prop in this.fields) {
          let field = this.fields[prop]
          field.validate('', errors => {
            if (errors) {
              valid = false
            }

            if (++count === this.fieldLength) {
              callback(valid)
            }
          })
        }
      },
      validateField (prop, cb) {
        var field = this.fields[prop]
        if (!field) { throw new Error('must call validateField with valid prop string!') }

        field.validate('', cb)
      }
    }
  }
</script>
