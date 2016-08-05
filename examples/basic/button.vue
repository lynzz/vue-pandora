<template lang="md">
# Button
---

## 如何使用

- 通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

- 按钮的属性说明如下：


属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `danger` `info` `warning` `success` 等， 或者不设 | String | undefined
htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 HTML标准 | String | `button`
shape | 设置按钮形状，可选值为 `outlined` `inverted` 或者不设 | String | undefined
size | 设置按钮大小，可选值为 `small` `medium` `large` 或者不设 | String | undefined
loading | 设置按钮载入状态，存在为 `true`，不存在为 `false`，或直接设置值，如：`:loading="true"` | Boolean | false
disabled | 设置按钮禁用，禁用为 `true`，否则为 `false`，或直接设置值，如：`:disabled="true"` | Boolean | false

## 组件演示
<demo>
  <example title="按钮类型">
    <p class="control">
      <p-button>default</p-button>
      <p-button type="white">white</p-button>
      <p-button type="light">light</p-button>
      <p-button type="dark">dark</p-button>
      <p-button type="black">black</p-button>
      <p-button type="link">link</p-button>
    </p>
    <p class="control">
      <p-button type="primary">primary</p-button>
      <p-button type="danger">danger</p-button>
      <p-button type="info">info</p-button>
      <p-button type="success">success</p-button>
      <p-button type="warning">warning</p-button>
    </p>
  </example>
  <example title="shape,  可设置 outlined 或 inverted">
    <p-button type="primary" shape="outlined">outlined</p-button>
    <p-button type="primary" shape="inverted">inverted</p-button>
  </example>
  <example title="按钮大小">
    <p-button size="small">small</p-button>
    <p-button>normal</p-button>
    <p-button size="medium">medium</p-button>
    <p-button size="large">large</p-button>
  </example>
  <example title="loading and disabled">
    <p-button :loading="true" :disabled="true">正在提交...</p-button>
  </example>
  <example title="修改 html type">
    <p-button html-type="submit">submit</p-button>
  </example>
  <example title="按钮组">
    <p-button-group :has-addons="false">
      <p-button>左</p-button>
      <p-button>中</p-button>
      <p-button>右</p-button>
    </p-button-group>
    <p-button-group>
      <p-button>左</p-button>
      <p-button>中</p-button>
      <p-button>右</p-button>
    </p-button-group>
  </example>
</demo>

</template>

<script>
  export default {
    methods: {
      handleClick (el) {
        window.alert('叫你点，你就点！')
      }
    }
  }
</script>
