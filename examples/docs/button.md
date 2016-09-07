<script>
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    }
  }
</script>


## Button
常用的操作按钮

### 基础类型

基础的按钮用法。

:::demo Button 组件有5种常用主题，由`type`属性来定义，默认为`default`。

```html
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
```
:::

### sharp 形状

可设置 outlined 或 inverted"

:::demo

```html
<p-button type="primary" shape="outlined">outlined</p-button>
<p-button type="primary" shape="inverted">inverted</p-button>
```
:::

### 不同大小

按钮的大小，由属性 size 定义，值有 `small`, `medium`,`large`, 默认是 `normal`

:::demo

```html
<p-button size="small">small</p-button>
<p-button>normal</p-button>
<p-button size="medium">medium</p-button>
<p-button size="large">large</p-button>
```
:::

### 按钮组

:::demo

```html
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
```

:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,white,link,dark,black |     —    |
| sharp     | 按钮形状   | string    | outlined,inverted | —   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| html-type | 原生 type 属性 | string | button,submit,reset | button |
