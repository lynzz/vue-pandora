<template>
  <aside class="aside-container">
    <ul>
      <li>
        <a v-link="{path: '/docs/introduce'}" class="">
          Vue Pandora
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <a v-link="{path: '/docs/getting-started'}" class="">
          快速上手
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <a v-link="{path: '/docs/download'}" class="">
          下载
          <span class="chinese"></span>
        </a>
      </li>
      <li>
        <h4>Components</h4>
        <ul>
          <li class="type-divider">基础</li>
          <li v-for="component in componentsMenu.basic">
            <a v-link="{path: component.path}">
              {{component.name | capitalize}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">表单</li>
          <li v-for="component in componentsMenu.form">
            <a v-link="{path: component.path}">
              {{component.name | capitalize}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">展示</li>
          <li v-for="component in componentsMenu.present">
            <a v-link="{path: component.path}">
              {{component.name | capitalize}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
          <li class="type-divider">导航</li>
          <li v-for="component in componentsMenu.nav">
            <a v-link="{path: component.path}">
              {{component.name | capitalize}}
              <span class="chinese">{{component.desc}}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    data () {
      return {
        componentsMenu: {
          basic: [{
            path: '/button',
            desc: '按钮',
            name: 'button'
          }, {
            path: '/layout',
            desc: '布局',
            name: 'layout'
          }],
          form: [{
            path: '/checkbox',
            desc: '多选框',
            name: 'checkbox'
          }, {
            path: '/radio',
            desc: '单选框',
            name: 'raido'
          }, {
            path: '/form',
            desc: '表单',
            name: 'form'
          }],
          present: [{
            path: '/alert',
            desc: '警告提示',
            name: 'alert'
          }],
          nav: [{
            path: '/breadcrumb',
            desc: '面包屑',
            name: 'breadcrumb'
          }]
        }
      }
    }
  }
</script>
