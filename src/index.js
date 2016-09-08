import Vue from 'vue'

import 'src/theme/bulma/bulma.sass'

import Button from './basic/button'
import ButtonGroup from './basic/button-group'
import Row from './basic/row'
import Col from './basic/col'
import Checkbox from './form/checkbox/checkbox'
import Form from './form/form'
import FormItem from './form/form-item'
import Field from './form/field'
import Input from './form/input'
import CheckboxGroup from './form/checkbox/checkbox-group'
import Radio from './form/radio/radio'
import RadioGroup from './form/radio/radio-group'

import Notice from './view/notification'

export var Components = {
  Button,
  ButtonGroup,
  Row,
  Col,
  Form,
  FormItem,
  Field,
  Checkbox,
  Input,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Notice
}

const initComponents = (Vue, prefix, components) => {
  if (arguments.length < 3) { // eslint-disable-line no-undef
    components = prefix
    prefix = 'p'
  } else {
    if (!prefix) {
      prefix = 'p'
    }
  }

  if (!components) components = Object.keys(Components)

  if (components instanceof Array) {
    for (var i = 0, j = components.length; i < j; i++) {
      var key = components[i]
      Vue.component(prefix + key, Components[key])
    }
  }
}

initComponents(Vue)
