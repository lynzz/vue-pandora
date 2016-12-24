<script>
  export default {
    data () {
      return {
        form1: {
          user: '',
          pwd: '',
          sex: '',
          like: []
        },
        userForm: {
          username: 'lynzz',
          pwd: '',
          sex: '',
          like: []
        },
        userRules: {
          username: [
            {required: true, message: '请填写用户名', trigger: 'blur'},
            {min: 5, message: '用户名至少 5 个字符', trigger: 'blur'}
          ],
          pwd: [{required: true, message: '请填写密码'}],
          sex: {required: true, message: '请选择性别', trigger: 'change'},
          like: {required: true, type: 'array', message: '请选择爱好', trigger: 'change'}
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.userForm.validate(valid => {
          if (valid) {
            console.log(this.userForm)
          } else {
            console.log('error')
          }
        })
      },
      handleReset () {
        this.$refs.userForm.resetFields()
      }
    }
  }
</script>
<style>
  .form1 {
    max-width: 500px
  }
</style>
## Form
---

### 基本用法

:::demo
```html
<p-form class="form1">
  <p-form-item label="用户名">
    <p-input placeholder="请填写用户名" v-model="form1.user"></p-input>
  </p-form-item>
  <p-form-item label="密码">
    <p-input placeholder="请输入密码" v-model="form1.pwd"></p-input>
  </p-form-item>
  <p-form-item label="性别">
    <p-radio-group v-model="form1.sex">
      <p-radio checked-value="man" label="男"></p-radio>
      <p-radio checked-value="woman" label="女"></p-radio>
    </p-radio-group>
  </p-form-item>
  <p-form-item label="爱好">
    <p-checkbox-group v-model="form1.like">
      <p-checkbox checked-value="badminton" label="羽毛球"></p-checkbox>
      <p-checkbox checked-value="football" label="足球"></p-checkbox>
      <p-checkbox checked-value="basketball" label="篮球"></p-checkbox>
    </p-checkbox-group>
  </p-form-item>
  <p-form-item>
    <p-button type="primary">提交</p-button>
    <p-button>重置</p-button>
  </p-form-item>
</p-form>
结果：{{form1}}
```
:::

### 行内表单

:::demo
```html
<p-form :inline="true">
  <p-form-item>
    <p-input placeholder="关键字"></p-input>
  </p-form-item>
  <p-form-item>
    <p-button icon="search" type="primary">搜索</p-button>
  </p-form-item>
</p-form>
```
:::

### 表单验证

:::demo
```html
<p-form class="form1" ref="userForm" :model="userForm" :rules="userRules">
  <p-form-item label="用户名" prop="username">
    <p-input placeholder="请填写用户名" v-model="userForm.username"></p-input>
  </p-form-item>
  <p-form-item label="密码" prop="pwd">
    <p-input placeholder="请输入密码" v-model="userForm.pwd"></p-input>
  </p-form-item>
  <p-form-item label="性别" prop="sex">
    <p-radio-group v-model="userForm.sex">
      <p-radio checked-value="man" label="男"></p-radio>
      <p-radio checked-value="woman" label="女"></p-radio>
    </p-radio-group>
  </p-form-item>
  <p-form-item label="爱好" prop="like">
    <p-checkbox-group v-model="userForm.like">
      <p-checkbox checked-value="badminton" label="羽毛球"></p-checkbox>
      <p-checkbox checked-value="football" label="足球"></p-checkbox>
      <p-checkbox checked-value="basketball" label="篮球"></p-checkbox>
    </p-checkbox-group>
  </p-form-item>
  <p-form-item>
    <p-button type="primary" @click.prevent="handleSubmit">提交</p-button>
    <p-button @click="handleReset">重置</p-button>
  </p-form-item>
</p-form>
```
:::

### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| inline    | 行内表单模式 | boolean | — | false |
| label-width | 表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值 | string | — | — |

### Form Methods

| 方法名      | 说明          |
|---------- |-------------- |
| validate(cb) | 对整个表单进行校验的方法 |
| validateField(prop, cb) | 对部分表单字段进行校验的方法 |
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 |

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px' | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | bolean | — | false |
