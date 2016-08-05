<template lang="md">
# Checkbox
---

## 如何使用


## 组件演示
<demo>
  <example title="基本用法">
    <p-checkbox>未选中</p-checkbox>
    <p-checkbox :checked="true">选中</p-checkbox>
    <p-checkbox :disabled="true">禁用</p-checkbox>
    <p-checkbox :on-change="onChange">与外部通信</p-checkbox>
  </example>
  <example title="checkbox 组">
    <p-checkbox-group :options="options" :on-change="onChangeGroup"></p-checkbox-group>
  </example>
</demo>

## API

### Checkbox

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
checked | 是否选中 | boolean | false
disabled | 是否禁用 | boolean | false
onChange | 变化回调 | function(e:Event) | -

### Checkbox 组

参数 | 说明 | 类型 | 默认值
-----|-----|-----|------
options | 选项值，如[{value:'osx', label: '苹果'}] | array | []
onChange | 变化回调 | function(checkedValue) | -
</template>
<script>
  export default {
    // Options / Data
    data () {
      return {
        options: [{
          value: 'osx',
          label: '苹果'
        }, {
          value: 'window',
          checked: true,
          label: '微软'
        }, {
          value: 'linux',
          disabled: true,
          label: '红旗'
        }]
      }
    },
    computed: {},
    methods: {
      onChange (e) {
        console.log(e.target.checked)
      },

      onChangeGroup (value) {
        console.log(value)
      }
    }
  }
</script>
