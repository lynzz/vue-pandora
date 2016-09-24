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
          username: '',
          pwd: '',
          sex: '',
          like: []
        },
        userRules: {
          username: {required: true, min: 5, message: '用户名至少 5 个字符'},
          pwd: {required: true},
          sex: {required: true},
          like: {required: true, type: 'array'}
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
    <p-button type="primary" @submit.prevent="handleSubmit">提交</p-button>
    <p-button @click="handleReset">重置</p-button>
  </p-form-item>
</p-form>
```
:::
