<template lang="md">
  # Form
  ---

  ## 组件例子

  <demo>
    <example title="一个登录表单">
      <p-form :schema="schema">
        <p-form-item label="用户名">
          <p-input placeholder="请填写用户名" />
        </p-form-item>
        <p-form-item label="备注">
          <p-input type="textarea" placeholder="写点吧" />
        </p-form-item>
        <p-form-item :hide-label="true">
          <p-button type="primary">提交</p-button>
        </p-form-item>
      </p-form>
    </example>
    <example title="表单验证">
      <validator name="validation">
        <form novalidate>
          <p class="validate-field" v-for="field in fields">
            <label>{{field.label}}</label>
            <input class="input" type="text" :placeholder="field.placeholder" :field="field.name" v-validate="field.validate">
          </p>
          <pre>{{ $validation | json }}</pre>
        </form>
      </validator>
    </example>
  </demo>
</template>

<script>
  export default {
    data () {
      return {
        fields: [{
          name: 'username',
          placeholder: '请填写姓名',
          label: '姓名',
          validate: {required: true, maxlength: 10}
        }, {
          name: 'address',
          placeholder: '请填写地址',
          label: '地址',
          validate: {required: true, minlength: 4}
        }],
        model: {
          username: ''
        },
        schema: {
          username: {
            type: 'string',
            required: true
          }
        }
      }
    }
  }
</script>
