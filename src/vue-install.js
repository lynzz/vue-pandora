import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'

import Icon from './icon/icon.vue'

import Row from './grid/row.vue'
import Col from './grid/col.vue'

import Checkbox from './checkbox/checkbox.vue'
import CheckboxGroup from './checkbox/checkbox-group.vue'

import Form from './form/form.vue'
import FormItem from './form/form-item.vue'

import Input from './input/input.vue'

import Radio from './radio/radio.vue'
import RadioGroup from './radio/radio-group.vue'

import Select from './select/select.vue'

import Tag from './tag/tag.vue'

const Components = {
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Form,
  FormItem,
  Checkbox,
  Input,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Tag,
  Select
}

const registerComponents = (_Vue) => {
  Object.keys(Components).forEach(key => {
    const Component = Components[key]
    _Vue.component(Component.name, Component)
  })
}

export var Vue

export default function (_Vue) {
  if (this.installed) {
    console.warn('PanoraUI already installed in Vue.')
    return
  }

  Vue = _Vue

  registerComponents(_Vue)
}
