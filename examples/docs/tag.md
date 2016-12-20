<script>
module.exports = {
  data() {
    return {
      tags: [
        {key: 1, name: '成功', type: 'success'},
        {key: 2, name: '信息', type: 'info'},
        {key: 3, name: '失败', type: 'danger'},
        {key: 4, name: '警告', type: 'warning'}
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
<p-tag type="primary">primary</p-tag>
<p-tag type="info">info</p-tag>
<p-tag type="success">success</p-tag>
<p-tag type="warning">warning</p-tag>
<p-tag type="danger">danger</p-tag>
<p-tag type="dark">dark</p-tag>
```
:::


### 可移除标签

:::demo

```html

<p-tag
  v-for="(tag, index) in tags"
  :key="tag.key"
  :type="tag.type"
  @close="closeTag(index)"
  :closable="true">
  {{tag.name}}
</p-tag>
<script>
module.exports = {
  data() {
    return {
      tags: [
        {key: 1, name: '成功', type: 'success'},
        {key: 2, name: '信息', type: 'info'},
        {key: 3, name: '失败', type: 'danger'},
        {key: 4, name: '警告', type: 'warning'}
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

### 大中小标签

:::demo

```html
<p-tag type="primary" size="large">Large</p-tag>
<p-tag type="info" size="medium">Medium</p-tag>
<p-tag type="success" size="small">Small</p-tag>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | 'primary', 'dark', 'success', 'warning', 'danger' | — |
| closable | 是否可关闭 | boolean | — | false |
| close-transition | 是否禁用关闭时的渐变动画 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭tag时触发的事件 | — |
