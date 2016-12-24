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

:::demo 按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。通过设置 `type` 为 `primary` `ghost` `dashed`可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

```html
<p-button>default</p-button>
<p-button type="primary">primary</p-button>
<p-button type="ghost">ghost</p-button>
<p-button type="dashed">dashed</p-button>

```
:::

### sharp 形状

可设置 `circle`

:::demo

```html
<p-button type="primary" shape="circle" icon="search"></p-button>
```
:::

### 不同大小

按钮的大小，由属性 size 定义，值有 `small`, `normal`,`large`, 默认是 `normal`

:::demo

```html
<p-button size="sm">small</p-button>
<p-button>normal</p-button>
<p-button size="lg">large</p-button>
```
:::

### 按钮组

:::demo

```html
<p-button-group>
  <p-button>左</p-button>
  <p-button>中</p-button>
  <p-button>右</p-button>
</p-button-group>
```

:::

### 带有图标的按钮

:::demo

```html
<p-button icon="user">用户</p-button>
<p-button icon="lock" type="primary">锁定</p-button>
<p-button icon="lock" type="primary" size="lg">变大</p-button>
<p-button icon="lock" type="primary" size="sm">变小</p-button>
```
:::

### 正加载的按钮

:::demo
```html
<p-button :loading="true" :disabled="true" type="info">提交中...</p-button>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   lg,sm            |    normal     |
| type     | 类型   | string    |   primary,default,ghost,dashed |     —    |
| sharp     | 按钮形状   | string    | circle | —   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| loading | 加载状态的按钮 | true,false | — | — |
| html-type | 原生 type 属性 | string | button,submit,reset | button |
