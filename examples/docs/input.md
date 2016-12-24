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
<p-row>
  <p-input placeholder="写点什么吧"></p-input>
</p-row>

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


### 前置/后置组合

:::demo
```html
<p-input placeholder="请输入内容">
  <template slot="before">
    http://
  </template>
</p-input>
<br>
<p-input placeholder="关键字">
  <template slot="after">
    <p-icon type="search"></p-icon>
  </template>
</p-input>

```
:::

### 不同大小

:::demo
```html
<p-row>
  <p-input placeholder="small input" size="sm"></p-input>
</p-row>
<p-row>
  <p-input placeholder="normal input"></p-input>
</p-row>
<p-row>
  <p-input placeholder="large input" size="lg"></p-input>
</p-row>

```
:::
