<script>
module.exports = {
  data() {
    return {
      tags: [
        {key: 1, name: '绿色', color: 'green'},
        {key: 2, name: '蓝色', color: 'blue'},
        {key: 3, name: '红色', color: 'red'},
        {key: 4, name: '黄色', color: 'yellow'}
      ]
    };
  },
  methods: {
    closeTag(index) {
      this.tags.splice(index, 1)
    }
  }
};
</script>
## Tag 标签


### 基本用法

:::demo

```html
<p-tag>default</p-tag>
<p-tag color="blue">blue</p-tag>
<p-tag color="red">red</p-tag>
<p-tag color="green">green</p-tag>
<p-tag color="yellow">yellow</p-tag>
<p-tag color="#108ee9">#108ee9</p-tag>
```
:::


### 可移除标签

:::demo

```html

<p-tag
  v-for="(tag, index) in tags"
  :key="tag.key"
  :color="tag.color"
  @close="closeTag(index)"
  :closable="true">
  {{tag.name}}
</p-tag>
<script>
module.exports = {
  data() {
    return {
      tags: [
        {key: 1, name: '绿色', color: 'green'},
        {key: 2, name: '蓝色', color: 'blue'},
        {key: 3, name: '红色', color: 'red'},
        {key: 4, name: '黄色', color: 'yellow'}
      ]
    };
  },
  methods: {
    closeTag(index) {
      this.tags.splice(index, 1)
    }
  }
};
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| color | 颜色 | string | 'blue', 'green', 'red', 'yellow' | — |
| closable | 是否可关闭 | boolean | — | false |
| close-transition | 是否禁用关闭时的渐变动画 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭tag时触发的事件 | — |
