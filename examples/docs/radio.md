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
<p-radio checked-value="a" label="单选 A" v-model="radio"></p-radio>
<p-radio checked-value="b" label="单选 B" v-model="radio"></p-radio>
<p-radio checked-value="c" label="单选 C" v-model="radio"></p-radio>
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
  <p-radio checked-value="100" label="100"></p-radio>
  <p-radio checked-value="50" label="50"></p-radio>
  <p-radio checked-value="1" label="1"></p-radio>
</p-radio-group>
<p>
  {{radio1}}
</p>
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
  <p-radio label="100" checked-value="100" :disabled="true"></p-radio>
  <p-radio label="50" checked-value="50" :disabled="true"></p-radio>
  <p-radio label="1" checked-value="1" :disabled="true"></p-radio>
</p-radio-group>
```
:::
