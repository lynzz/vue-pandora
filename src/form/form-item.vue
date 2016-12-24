<template>
  <div class="ant-form ant-form-item">
    <div
      class="ant-form-item-label"
      v-if="label"
      :class="[labelCls]"
      :style="labelStyle">
      <label
        :class="{'ant-form-item-required': required || isRequired}">
        {{label}}
      </label>
    </div>
    <div class="ant-form-item-control" :style="controlStyle" :class="[controlCls]">
      <slot></slot>
      <transition>
        <div class="ant-form-explain" v-if="error">{{error}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
  import AsyncValidator from 'async-validator'
  import emitter from 'src/mixins/emitter'
  export default {
    name: 'pFormItem',
    componentName: 'form-item',
    mixins: [emitter],
    props: {
      label: String,
      labelCol: Object,
      wrapperCol: Object,
      prop: String,
      required: Boolean,
      labelWidth: String,
      feedback: {
        type: Boolean,
        default: false
      },
      rules: [Object, Array]
    },
    data () {
      return {
        valid: true,
        error: '',
        validateDisabled: false,
        validating: false,
        validator: {},
        isRequired: false
      }
    },
    computed: {
      form () {
        let parent = this.$parent
        while (parent.$options.componentName !== 'form') {
          parent = parent.$parent
        }
        return parent
      },
      labelStyle () {
        let style = {}
        let labelWidth = this.labelWidth || this.form.labelWidth

        if (labelWidth) {
          style.width = labelWidth
        }
        return style
      },
      controlStyle () {
        let style = {}
        let labelWidth = this.labelWidth || this.form.labelWidth

        if (labelWidth) {
          style.marginLeft = labelWidth
        }
        return style
      },
      labelCls () {
        let cls = []
        const labelCol = this.labelCol
        if (labelCol) {
          const {span, offset} = labelCol
          if (span) {
            cls.push(`ant-col-${span}`)
          }
          if (offset) {
            cls.push(`ant-col-offset-${offset}`)
          }
        }

        return cls.join(' ')
      },
      controlCls () {
        let cls = []
        const wrapperCol = this.wrapperCol
        if (wrapperCol) {
          const {span, offset} = wrapperCol
          if (span) {
            cls.push(`ant-col-${span}`)
          }
          if (offset) {
            cls.push(`ant-col-offset-${offset}`)
          }
        }

        if (this.error) {
          cls.push('has-error')
        } else {
          cls.push('has-success')
        }

        if (this.feedback) {
          cls.push('has-feedback')
        }

        return cls.join(' ')
      },
      fieldValue: {
        cache: false,
        get () {
          let prop = this.prop
          let model = this.form.model
          return prop && model ? model[prop] : ''
        }
      }
    },
    methods: {
      validate (trigger, cb) {
        let rules = this.getFilteredRule(trigger)

        if (!rules) {
          cb && cb()
          return true
        }
        this.validating = true

        var descriptor = {}
        descriptor[this.prop] = rules

        var validator = new AsyncValidator(descriptor)
        var model = {}

        model[this.prop] = this.fieldValue

        validator.validate(model, { firstFields: true }, (errors, fields) => {
          this.valid = !errors
          this.error = errors ? errors[0].message : ''

          cb && cb(errors)
          this.validating = false
        })
      },
      getRules () {
        let formRules = this.prop ? this.form.rules[this.prop] : []
        let selfRules = this.rules

        return [].concat(selfRules || formRules || [])
      },
      getFilteredRule (trigger) {
        let rules = this.getRules()

        return rules.filter(rule => {
          return !rule.trigger || rule.trigger.indexOf(trigger) !== -1
        })
      },
      resetField () {
        this.valid = true
        this.error = ''

        let model = this.form.model
        let value = this.fieldValue

        if (Array.isArray(value) && value.length > 0) {
          this.validateDisabled = true
          model[this.prop] = []
        } else if (value) {
          this.validateDisabled = true
          model[this.prop] = this.initialValue
        }
      },
      onFieldBlur () {
        this.validate('blur')
      },
      onFieldChange () {
        if (this.validateDisabled) {
          this.validateDisabled = false
          return
        }

        this.validate('change')
      },
      getInitialValue () {
        var value = this.form.model[this.prop]
        if (value === undefined) {
          return value
        } else {
          return JSON.parse(JSON.stringify(value))
        }
      }
    },
    mounted () {
      if (this.prop) {
        this.dispatch('form', 'p.form.addField', [this])

        this.initialValue = this.getInitialValue()

        let rules = this.getRules()

        if (rules.length) {
          rules.every(rule => {
            if (rule.required) {
              this.isRequired = true
              return false
            }
          })

          this.$on('p.form.blur', this.onFieldBlur)
          this.$on('p.form.change', this.onFieldChange)
        }
      }
    },
    beforeDestroy () {
      this.dispatch('form', 'p.form.removeField', [this])
    }
  }
</script>
