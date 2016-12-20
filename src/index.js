import Vue from 'vue'

import 'src/theme/bulma/bulma.sass'

import Button from './basic/button'
import ButtonGroup from './basic/button-group'
import Icon from './basic/icon'
import Row from './basic/row'
import Col from './basic/col'

import Checkbox from './form/checkbox/checkbox'
import Form from './form/form'
import FormItem from './form/form-item'
import Input from './form/input'
import CheckboxGroup from './form/checkbox/checkbox-group'
import Radio from './form/radio/radio'
import RadioGroup from './form/radio/radio-group'
import Select from './form/select/select'

import Tag from './data/tag/tag'

import Notice from './notice/notification'

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
  Notice
}

Object.keys(Components).forEach(key => {
  const Component = Components[key]
  Vue.component(Component.name, Component)
})
