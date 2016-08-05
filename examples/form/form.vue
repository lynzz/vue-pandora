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
  </demo>
</template>

<script>
  export default {
    data () {
      return {
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
