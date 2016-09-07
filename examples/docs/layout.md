## Layout

---

一个简单的响应式布局


### 默认布局

:::demo

```html
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
```
:::

### 按比例

:::demo
```html
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
```
:::

### 分为 12 列

:::demo
```html
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
```
:::

### offset

:::demo

```html
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
```
:::

### 多行

:::demo
```html
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
```
:::

### gapless

:::demo
```html
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
```
:::
