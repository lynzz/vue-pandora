<script>
  export default {
    data () {
      return {
        checked: [],
        checkedList: [],
        checkedList1: ['dios']
      }
    }
  }
</script>
## Checkbox
---

### 基本用法

:::demo
```html
<p-checkbox checked-value="a" label="多选 A" v-model="checked"></p-checkbox>
<p-checkbox checked-value="b" label="多选 B" v-model="checked"></p-checkbox>
<p>
  结果：{{checked}}
</p>

```
:::

### 多选框组

:::demo
```html
<p-checkbox-group v-model="checkedList">
  <p-checkbox checked-value="money" label="要钱"></p-checkbox>
  <p-checkbox checked-value="car" label="要车"></p-checkbox>
  <p-checkbox checked-value="house" label="要房"></p-checkbox>
</p-checkbox-group>
<p>
  结果：{{checkedList}}
</p>
<script>
  export default {
    data () {
      checkedList: []
    }
  }
</script>
```
:::

### 禁用

:::demo
```html
<p-checkbox-group v-model="checkedList1">
  <p-checkbox checked-value="money" label="不能要钱" :disabled="true"></p-checkbox>
  <p-checkbox checked-value="car" label="要车"></p-checkbox>
  <p-checkbox checked-value="house" label="要房"></p-checkbox>
  <p-checkbox checked-value="dios" label="屌丝" :disabled="true"></p-checkbox>
</p-checkbox-group>
<p>
  结果：{{checkedList1}}
</p>

```
:::
