<template lang="md">
# Layout
---

一个简单的响应式布局

## Col

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
size | 单列宽度 `three-quarters` `two-thirds` `half` `one-third` `one-quarter` 等， 或者不设 | String | undefined

## 组件演示
<demo>
  <example title="默认">
    <p-row>
      <p-col>
        <p-notice type="info">第一列</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">第二列</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">第三列</p-notice>
      </p-col>
      <p-col>
        <p-notice type="danger">第四列</p-notice>
      </p-col>
    </p-row>
  </example>
  <example title="按比例">
    <p-row>
      <p-col size="three-quarters">
        <p-notice type="info">three-quarters</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">auto</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">auto</p-notice>
      </p-col>
    </p-row>

    <p-row>
      <p-col size="two-thirds">
        <p-notice type="info">two-thirds</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">auto</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">auto</p-notice>
      </p-col>
    </p-row>

    <p-row>
      <p-col size="half">
        <p-notice type="info">half</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">auto</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">auto</p-notice>
      </p-col>
    </p-row>

    <p-row>
      <p-col size="one-third">
        <p-notice type="info">one-third</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">auto</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">auto</p-notice>
      </p-col>
    </p-row>

    <p-row>
      <p-col size="one-quarter">
        <p-notice type="info">one-quarter</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">auto</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">auto</p-notice>
      </p-col>
    </p-row>


  </example>

  <example title="分为 12 列">
    <p-row>
      <p-col size="2">
        <p-notice type="primary">2</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">1</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">1</p-notice>
      </p-col>
    </p-row>
    <p-row>
      <p-col size="11"><p-notice type="primary">11</p-notice></p-col>
      <p-col><p-notice type="warning">1</p-notice></p-col>
    </p-row>
  </example>
  <example title="offset">
    <p-row type="mobile">
      <p-col size="half" offset="one-quarter">
        <p-notice type="primary">size=half, offset=one-quarter</p-notice>
      </p-col>
    </p-row>
    <p-row type="mobile">
      <p-col size="4" offset="8">
        <p-notice type="primary">size=4, offset=8</p-notice>
      </p-col>
    </p-row>
    <p-row type="mobile">
      <p-col size="11" offset="1">
        <p-notice type="primary">size=11, offset=1</p-notice>
      </p-col>
    </p-row>
  </example>
  <example title="multiline">
    <p-row :multiline="true">
      <p-col size="one-quarter">
        <p-notice type="primary">one-quarter</p-notice>
      </p-col>
      <p-col size="one-quarter">
        <p-notice type="success">one-quarter</p-notice>
      </p-col>
      <p-col size="one-quarter">
        <p-notice type="warning">one-quarter</p-notice>
      </p-col>
      <p-col size="one-quarter">
        <p-notice type="danger">one-quarter</p-notice>
      </p-col>
      <p-col size="half">
        <p-notice type="primary">half</p-notice>
      </p-col>
      <p-col size="one-quarter">
        <p-notice type="success">one-quarter</p-notice>
      </p-col>
      <p-col size="one-quarter">
        <p-notice type="warning">one-quarter</p-notice>
      </p-col>
      <p-col size="one-quarter">
        <p-notice type="danger">one-quarter</p-notice>
      </p-col>
      <p-col>
        <p-notice type="primary">auto</p-notice>
      </p-col>
    </p-row>
  </example>
  <example title="gapless">
    <p-row :gapless="true">
      <p-col>
        <p-notice type="primary">第一列</p-notice>
      </p-col>
      <p-col>
        <p-notice type="success">第二列</p-notice>
      </p-col>
      <p-col>
        <p-notice type="info">第三列</p-notice>
      </p-col>
      <p-col>
        <p-notice type="warning">第四列</p-notice>
      </p-col>
    </p-row>
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
