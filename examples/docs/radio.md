<script>
  module.exports = {
    data() {
      return {
        radio: '',
        radio1: '50',
        radio2: '1'
      };
    }
  };
</script>
## Radio

单选按钮

### 基本用法

:::demo

```html
<p-radio label="单选 A" v-model="radio"></p-radio>
<p-radio label="单选 B" v-model="radio"></p-radio>
<p>
  {{radio}}
</p>
<script>
  module.exports = {
    data () {
      return {
        radio: ''
      };
    }
  };
</script>
```
:::

### 按钮组

:::demo
```html
<p-radio-group v-model="radio1">
  <p-radio label="100"></p-radio>
  <p-radio label="50"></p-radio>
  <p-radio label="1"></p-radio>
</p-radio-group>
<script>
  module.exports = {
    data () {
      return {
        radio1: '50'
      };
    }
  };
</script>
```
:::

### 禁用

:::demo
```html
<p-radio-group v-model="radio2">
  <p-radio label="100" :disabled="true"></p-radio>
  <p-radio label="50" :disabled="true"></p-radio>
  <p-radio label="1" :disabled="true"></p-radio>
</p-radio-group>
```
:::
