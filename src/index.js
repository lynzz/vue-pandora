import Vue from 'vue'

import 'src/style/index.less'

import Button from './button/button'
import ButtonGroup from './button/button-group'

import Icon from './icon/icon'

import Row from './grid/row'
import Col from './grid/col'

import Checkbox from './checkbox/checkbox'
import CheckboxGroup from './checkbox/checkbox-group'

import Form from './form/form'
import FormItem from './form/form-item'

import Input from './input/input'

import Radio from './radio/radio'
import RadioGroup from './radio/radio-group'

import Select from './select/select'

import Tag from './tag/tag'

import Notification from './notice/notification'

export var Components = {
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
  Select,
  Notification
}

Object.keys(Components).forEach(key => {
  const Component = Components[key]
  Vue.component(Component.name, Component)
})
