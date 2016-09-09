<script>
  export default {
    data () {
      return {
        input: '这是只读的'
      }
    }
  }
</script>
## Input
---

### 基本用法

:::demo
```html
<p-input placeholder="写点什么吧"></p-input>
<p-input type="textarea" placeholder="写点什么吧"></p-input>
```
:::

### 禁用状态

:::demo
```html
<p-input placeholder="写点什么吧" :disabled="true"></p-input>
```
:::

### 只读状态

:::demo
```html
<p-input placeholder="写点什么吧" v-model="input" :readonly="true"></p-input>
```
:::

### 反馈状态

:::demo
```html
<p-input placeholder="写点什么吧" theme="success" icon="check"></p-input>
<p-input placeholder="写点什么吧" theme="danger" icon="warning"></p-input>
```
:::

### 复合型

:::demo
```html
<p-input placeholder="关键字">
  <template slot="append"><p-button icon="search" type="primary">搜索</p-button></template>
</p-input>
<p-input placeholder="url">
  <div class="input-prepend" slot="prepend">http://</div>
</p-input>
<p-input placeholder="输入金额">
  <div class="input-prepend" slot="prepend">￥</div>
  <template slot="append"><p-button type="primary">确定</p-button></template>
</p-input>
```
:::

### 带有图标

:::demo
```html
<p-input placeholder="时间" icon="calendar"></p-input>
<p-input placeholder="用户名" :icon-right="false" icon="user"></p-input>
```
:::

### 加载状态

:::demo
```html
<p-input placeholder="验证中..." :loading="true"></p-input>
```
:::

### 不同大小

:::demo
```html
<p-input placeholder="small input" size="small"></p-input>
<p-input placeholder="normal input"></p-input>
<p-input placeholder="medium input" size="medium"></p-input>
<p-input placeholder="large input" size="large"></p-input>
```
:::
